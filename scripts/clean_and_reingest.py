"""
Phase 1 Cleaning: Quarantine junk images (too small, too banner-like) 
and re-ingest the master catalogue with only good images.

Run AFTER analyze_images.py confirms the numbers look right.
"""
import os
import shutil
import json
import pandas as pd
from PIL import Image

base_docs = r'D:\Clean Data Services\Projects\2026 - Projects\Dentose Chamo\Docs for Website'
extracted_images_dir = os.path.join(base_docs, 'extracted_images')
quarantine_dir = os.path.join(base_docs, 'extracted_images_quarantine')
catalogues_dir = os.path.join(base_docs, 'Catalogues')

public_img_dir = os.path.abspath(os.path.join('public', 'images', 'products', 'dentose'))
data_js_path = os.path.abspath(os.path.join('src', 'data', 'products.js'))

os.makedirs(quarantine_dir, exist_ok=True)
os.makedirs(public_img_dir, exist_ok=True)

# ──────────────────────────────────────────────
# STEP 1: Quarantine junk images
# ──────────────────────────────────────────────
print("=== STEP 1: Quarantining junk images ===")
quarantined = 0
kept = 0

for fname in os.listdir(extracted_images_dir):
    if not fname.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
        continue
    fpath = os.path.join(extracted_images_dir, fname)
    try:
        with Image.open(fpath) as img:
            w, h = img.size
            aspect = w / h if h > 0 else 999
            is_junk = (w < 100 or h < 100) or aspect > 4.0
            
            if is_junk:
                shutil.move(fpath, os.path.join(quarantine_dir, fname))
                quarantined += 1
            else:
                kept += 1
    except Exception:
        # Unreadable => quarantine
        shutil.move(fpath, os.path.join(quarantine_dir, fname))
        quarantined += 1

print(f"Quarantined: {quarantined} junk images")
print(f"Kept:        {kept} good images")

# ──────────────────────────────────────────────
# STEP 2: Re-map images for the master catalogue
# ──────────────────────────────────────────────
print("\n=== STEP 2: Re-mapping good images to products ===")
available_images = os.listdir(extracted_images_dir)

# Build fast lookup: DC-XXXX -> [list of img filenames]
image_map = {}
for img in available_images:
    prefix = img.split('_')[0]  # e.g. "DC-0001"
    if prefix not in image_map:
        image_map[prefix] = []
    image_map[prefix].append(img)

def safe_val(v):
    return "" if pd.isna(v) else str(v).strip()

# ──────────────────────────────────────────────
# STEP 3: Re-ingest master catalogue with clean images
# ──────────────────────────────────────────────
print("\n=== STEP 3: Ingesting Product_Catalogue_Master.xlsx ===")
df = pd.read_excel(os.path.join(catalogues_dir, 'Product_Catalogue_Master.xlsx'))
cols = df.columns.tolist()

# Load existing non-DC products (topzir, accu, ires)
with open(data_js_path, 'r', encoding='utf-8') as f:
    text = f.read()
    json_str = text.split("export const products = ")[1].strip().rstrip(';')
    existing_products = json.loads(json_str)

# Keep TopZir / Accu / IRES as-is, replace dentose/oradent/akedent
keep_existing = [p for p in existing_products if p.get('company') not in ['dentose', 'oradent', 'akedent']]
print(f"Kept {len(keep_existing)} existing supplier products (TopZir/Accu/IRES).")

new_products = []
count = 0

for _, row in df.iterrows():
    prod_id = safe_val(row.get('Product ID', ''))
    if not prod_id or prod_id == 'nan':
        continue

    prod_name = safe_val(row.get('Product Name', f"Item {prod_id}"))
    category  = safe_val(row.get('Category', 'Medical'))
    segment   = "agriculture" if "agri" in category.lower() else "medical"

    # Company segregation based on Brand / Datasheet
    brand_val     = safe_val(row.get('Brand', '')).lower()
    datasheet_val = safe_val(row.get('Datasheet (PDF)', '')).lower()
    company_slug  = "dentose"
    if 'oradox' in brand_val or 'oradox' in datasheet_val:
        company_slug = "oradent"
    elif 'akedent' in brand_val or 'akedent' in datasheet_val:
        company_slug = "akedent"

    # Build specs dict (normalize text)
    specifications = {}
    skip_cols = {'Product ID', 'Product Name', 'Category'}
    for col in cols:
        if col in skip_cols or 'Unnamed' in str(col):
            continue
        val = safe_val(row.get(col, ''))
        if val:
            # Clean common PDF artifacts
            val = val.replace('\n', ' ').replace('\r', '').strip()
            specifications[str(col).strip()] = val

    # Image matching — prefer "main" image, then any, after quarantine cleanup
    matched_imgs = image_map.get(prod_id, [])
    main_image_url = ""
    if matched_imgs:
        selected = matched_imgs[0]
        for im in matched_imgs:
            if 'main' in im.lower():
                selected = im
                break
        src = os.path.join(extracted_images_dir, selected)
        dest = os.path.join(public_img_dir, selected)
        try:
            shutil.copy2(src, dest)
            main_image_url = f"/images/products/dentose/{selected}"
        except Exception:
            pass

    new_products.append({
        "id": prod_id.replace(" ", "-").lower(),
        "commercial_name": prod_name,
        "category": category,
        "company": company_slug,
        "segment": segment,
        "image": main_image_url,
        "specifications": specifications
    })
    count += 1
    if count % 500 == 0:
        print(f"  Ingested {count}...")

print(f"Ingested {count} Dentose-group products.")

# ──────────────────────────────────────────────
# STEP 4: Write final products.js
# ──────────────────────────────────────────────
final_products = keep_existing + new_products
js_content = (
    "// AUTO-GENERATED MASTER DATA STORE\n"
    f"export const products = {json.dumps(final_products, indent=2)};\n"
)
with open(data_js_path, 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"\n✅ Done! Total products in store: {len(final_products)}")
print(f"   • Dentose/OraD/Akedent: {count}")
print(f"   • Supplier brands:       {len(keep_existing)}")
print(f"   • Images quarantined:    {quarantined}")
