import pandas as pd
import os
import shutil
import json

base_docs = r'D:\Clean Data Services\Projects\2026 - Projects\Dentose Chamo\Docs for Website'
catalogues_dir = os.path.join(base_docs, 'Catalogues')
extracted_images_dir = os.path.join(base_docs, 'extracted_images')

public_img_dir = os.path.abspath(os.path.join('public', 'images', 'products', 'dentose'))
os.makedirs(public_img_dir, exist_ok=True)

# 1. Parse existing data
data_js_path = os.path.abspath(os.path.join('src', 'data', 'products.js'))
existing_products = []
if os.path.exists(data_js_path):
    with open(data_js_path, 'r', encoding='utf-8') as f:
        text = f.read()
        try:
            json_str = text.split("export const products = ")[1].strip().rstrip(';')
            existing_products = json.loads(json_str)
        except Exception as e:
            print("JSON parse error on existing products. Will reset.", e)

new_products = []
df = pd.read_excel(os.path.join(catalogues_dir, 'Product_Catalogue_Master.xlsx'))
cols = df.columns.tolist()

available_images = []
if os.path.exists(extracted_images_dir):
    available_images = os.listdir(extracted_images_dir)

# Build a fast mapping
image_map = {}
for img in available_images:
    parts = img.split('_')
    if parts:
        prefix = parts[0]
        if prefix not in image_map:
            image_map[prefix] = []
        image_map[prefix].append(img)

def safe_val(v):
    return "" if pd.isna(v) else str(v).strip()

count = 0
for index, row in df.iterrows():
    prod_id = safe_val(row['Product ID'])
    if not prod_id or prod_id == 'nan': continue
    
    prod_name = safe_val(row['Product Name']) if 'Product Name' in cols else f"Dentose Item {prod_id}"
    category = safe_val(row['Category']) if 'Category' in cols else "Medical Console"
    
    # We enforce segment based on category heuristic if missing
    segment = "medical"
    if "agri" in category.lower():
        segment = "agriculture"
        
    specifications = {}
    for col in cols:
        val = safe_val(row[col])
        if val and col not in ['Product ID', 'Product Name', 'Category'] and 'Unnamed' not in str(col):
            specifications[str(col).strip()] = val
            
    # Matching Images
    matched_imgs = image_map.get(prod_id, [])
    main_image_url = ""
    selected_img = None
    if matched_imgs:
        selected_img = matched_imgs[0]
        for im in matched_imgs:
            if 'main' in im.lower():
                selected_img = im
                break
                
        src_img = os.path.join(extracted_images_dir, selected_img)
        dest_img = os.path.join(public_img_dir, selected_img)
        try:
            shutil.copy2(src_img, dest_img)
        except Exception:
            pass
            
        main_image_url = f"/images/products/dentose/{selected_img}"
        
        
    # Company Segregation Logic
    brand_val = safe_val(row['Brand']).lower()
    datasheet_val = safe_val(row['Datasheet (PDF)']).lower()
    
    company_slug = "dentose"
    if 'oradox' in brand_val or 'oradox' in datasheet_val:
        company_slug = "oradent"
    elif 'akedent' in brand_val or 'akedent' in datasheet_val:
        company_slug = "akedent"

    product_obj = {
        "id": prod_id.replace(" ", "-").lower(),
        "commercial_name": prod_name,
        "category": category,
        "company": company_slug,  
        "segment": segment,
        "image": main_image_url,
        "specifications": specifications
    }
    
    # Check if duplicate in topzir/accu? Not likely.
    new_products.append(product_obj)
    count += 1
    if count % 500 == 0:
        print(f"Processed {count} records...")

print(f"Parsed {count} Dentose products. Appending to existing {len(existing_products)}...")
# To prevent duplicates from multiple script runs, filter existing by non-generated
existing_clean = [p for p in existing_products if p.get('company') not in ['dentose', 'oradent', 'akedent']]
final_products = existing_clean + new_products

js_content = f"// AUTO-GENERATED MASTER DATA STORE\nexport const products = {json.dumps(final_products, indent=2)};\n"
with open(data_js_path, 'w', encoding='utf-8') as f:
    f.write(js_content)
    
print("SUCCESSFULLY INTEGRATED DENTOSE CHAMO MULTI-THOUSAND DB!")
