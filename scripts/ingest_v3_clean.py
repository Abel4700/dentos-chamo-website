"""
Step 1: Ingest the new CLEAN data for Accu-Med, Oradox, and Prevest.
This script replaces existing data for these 3 brands with the curated dataset.
"""
import pandas as pd
import os
import shutil
import json

# ── Paths ────────────────────────────────────────────────────────
new_db_root = r'C:\Users\abelg\.gemini\antigravity\scratch\dentosechamo-scraper\New Product Master Database'
public_img_root = os.path.abspath(os.path.join('public', 'images', 'products'))
data_js_path = os.path.abspath(os.path.join('src', 'data', 'products.js'))

# Configuration for the 3 manufacturers
CONFIG = {
    'Accu-Med': {
        'excel': 'Accu-Med-Maxilo.xlsx',
        'mfr_slug': 'accu-med',
        'company': 'dentose',
        'pdf': '/catalogues/Accu_Med_Maxilo_Cataloguel.pdf'
    },
    'Oradox': {
        'excel': 'Oradox-Catalogue.xlsx',
        'mfr_slug': 'oradox',
        'company': 'oradent',
        'pdf': '/catalogues/Oradox_Catalogue.pdf'
    },
    'Prevest': {
        'excel': 'Prevest-Denpro-2026.xlsx',
        'mfr_slug': 'prevest',
        'company': 'dentose',
        'pdf': '/catalogues/Prevest-Denpro-Catalog-2026.pdf'
    }
}

def safe_val(v):
    return "" if pd.isna(v) else str(v).strip()

# ── 1. Load Existing Data ───────────────────────────────────────
print("Loading existing products.js...")
with open(data_js_path, 'r', encoding='utf-8') as f:
    text = f.read()
json_str = text.split("export const products = ")[1].strip().rstrip(';')
existing_products = json.loads(json_str)

# Filter out old data for these 3 brands to avoid duplicates/mess
clean_existing = [p for p in existing_products if p.get('manufacturer') not in ['accu-med', 'oradox', 'prevest']]
print(f"Kept {len(clean_existing)} products from other brands.")

new_total_list = list(clean_existing)

# ── 2. Process Each Brand ───────────────────────────────────────
for brand_name, info in CONFIG.items():
    brand_dir = os.path.join(new_db_root, brand_name)
    excel_path = os.path.join(brand_dir, info['excel'])
    img_src_dir = os.path.join(brand_dir, 'images')
    img_dest_dir = os.path.join(public_img_root, info['mfr_slug'])
    
    os.makedirs(img_dest_dir, exist_ok=True)
    
    print(f"\nIngesting {brand_name} from {info['excel']}...")
    df = pd.read_excel(excel_path)
    
    brand_count = 0
    for _, row in df.iterrows():
        prod_id = safe_val(row.get('Product ID'))
        if not prod_id: continue
        
        # Meta
        prod_name = safe_val(row.get('Product Name'))
        short_desc = safe_val(row.get('Short Description'))
        category = safe_val(row.get('Category'))
        
        # Image
        img_filename = safe_val(row.get('Product Images'))
        main_image_url = ""
        if img_filename:
            src_path = os.path.join(img_src_dir, img_filename)
            if os.path.exists(src_path):
                shutil.copy2(src_path, os.path.join(img_dest_dir, img_filename))
                main_image_url = f"/images/products/{info['mfr_slug']}/{img_filename}"
            else:
                # Try Case-insensitive match if direct fails
                found = False
                if os.path.exists(img_src_dir):
                    for f in os.listdir(img_src_dir):
                        if f.lower() == img_filename.lower():
                            shutil.copy2(os.path.join(img_src_dir, f), os.path.join(img_dest_dir, f))
                            main_image_url = f"/images/products/{info['mfr_slug']}/{f}"
                            found = True
                            break
        
        # Specs
        specifications = {}
        for col in ['Subcategory', 'Brand', 'Specifications', 'Certification']:
            val = safe_val(row.get(col))
            if val: specifications[col] = val
            
        new_total_list.append({
            "id": prod_id.replace(" ", "-").lower() + f"-{info['mfr_slug']}",
            "commercial_name": prod_name,
            "shortDesc": short_desc,
            "category": category,
            "company": info['company'],
            "manufacturer": info['mfr_slug'],
            "segment": "medical",
            "image": main_image_url,
            "featured": True,
            "catalogue_pdf": info['pdf'],
            "specifications": specifications
        })
        brand_count += 1
        
    print(f"  Successfully ingested {brand_count} clean products for {brand_name}.")

# ── 3. Write Back ───────────────────────────────────────────────
js_content = ("// AUTO-GENERATED MASTER DATA STORE\n"
             f"export const products = {json.dumps(new_total_list, indent=2)};\n")
with open(data_js_path, 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"\n✅ RE-INGESTION COMPLETE. Total products in database: {len(new_total_list)}")
