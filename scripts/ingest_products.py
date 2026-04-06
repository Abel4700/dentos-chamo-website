import pandas as pd
import os
import shutil
import json
import re

# Paths
base_docs = r'D:\Clean Data Services\Projects\2026 - Projects\Dentose Chamo\Docs for Website'
scraped_dir = os.path.join(base_docs, 'Scrapped Catalogue Products')
catalogues_dir = os.path.join(base_docs, 'Catalogues')
extracted_images_dir = os.path.join(base_docs, 'extracted_images')

public_img_dir = os.path.abspath(os.path.join('public', 'images', 'products'))
public_cat_dir = os.path.abspath(os.path.join('public', 'catalogues'))
data_js_path = os.path.abspath(os.path.join('src', 'data', 'products.js'))

os.makedirs(public_img_dir, exist_ok=True)
os.makedirs(public_cat_dir, exist_ok=True)

excel_files = [
    'IRES_Product_Master_Data_Filled.xlsx',
    'Topzir_Product_Master_Data_Populated_V1.xlsx',
    'Accu_Med_Product_Master_Data_Populated.xlsx'
]

# Cache all available images to avoid os.listdir loops
available_images = []
if os.path.exists(extracted_images_dir):
    available_images = os.listdir(extracted_images_dir)

all_products = []

def clean_key(k):
    return str(k).strip()

def safe_val(v):
    if pd.isna(v):
        return ""
    return str(v).strip()

for f in excel_files:
    full_path = os.path.join(scraped_dir, f)
    if not os.path.exists(full_path):
        print(f"[WARN] File not found: {full_path}")
        continue

    print(f"\nProcessing {f}...")
    brand_name = f.split('_')[0]
    
    # We do a safe copy to avoid locking errors
    temp_path = "temp_" + f
    shutil.copy2(full_path, temp_path)
    
    try:
        # Load the sheet. Use skiprows=1 since row 0 is usually 'Section 1...' and row 1 is 'Product ID*'
        df = pd.read_excel(temp_path, skiprows=1)
        
        # Determine actual 'Product ID', 'Name', etc from dynamic columns
        cols = df.columns.tolist()
        
        id_col = None
        name_col = None
        category_col = None
        
        for c in cols:
            cl = str(c).lower()
            if 'product id' in cl or 'part number' in cl or 'ref' in cl:
                if not id_col: id_col = c
            if 'product name' in cl or 'commercial name' in cl or 'description' in cl:
                if not name_col: name_col = c
            if 'category' in cl or 'group' in cl:
                if not category_col: category_col = c
        
        # Fallbacks
        if not id_col and len(cols) > 0: id_col = cols[0]
        if not name_col and len(cols) > 1: name_col = cols[1]
        
        for index, row in df.iterrows():
            prod_id = safe_val(row[id_col])
            prod_name = safe_val(row[name_col]) if name_col else f"Item {prod_id}"
            category = safe_val(row[category_col]) if category_col else "Medical"
            
            if not prod_id or prod_id == 'nan' or prod_id.startswith('Unnamed'):
                continue
                
            specifications = {}
            for col in cols:
                val = safe_val(row[col])
                if val and col not in [id_col, name_col, category_col] and 'Unnamed' not in str(col):
                    specifications[clean_key(col)] = val
            
            # Find matching images
            main_image_url = ""
            # Some IDs might have characters that cause regex fails, so we do direct string checking
            matched_imgs = [img for img in available_images if str(prod_id).replace(" ", "") in img.replace(" ", "")]
            
            if matched_imgs:
                brand_img_dir = os.path.join(public_img_dir, brand_name)
                os.makedirs(brand_img_dir, exist_ok=True)
                
                # Take the first matched image
                selected_img = matched_imgs[0]
                src_img = os.path.join(extracted_images_dir, selected_img)
                dest_img = os.path.join(brand_img_dir, selected_img)
                shutil.copy2(src_img, dest_img)
                
                main_image_url = f"/images/products/{brand_name}/{selected_img}"
            
            product_obj = {
                "id": prod_id.replace(" ", "-").lower() + f"-{index}",
                "commercial_name": prod_name,
                "category": category,
                "company": brand_name.lower(),
                "segment": "medical",
                "image": main_image_url,
                "specifications": specifications
            }
            all_products.append(product_obj)
            
        print(f"Ingested {len(df)} records from {brand_name}.")

    except Exception as e:
        print(f"[ERROR] Failed on {f}: {e}")
    finally:
        if os.path.exists(temp_path):
            os.remove(temp_path)

# PDF CATALOGUES INGESTION
print("\nProcessing PDF Catalogues...")
if os.path.exists(catalogues_dir):
    for pdf_file in os.listdir(catalogues_dir):
        if pdf_file.lower().endswith('.pdf'):
            src_pdf = os.path.join(catalogues_dir, pdf_file)
            dest_pdf = os.path.join(public_cat_dir, pdf_file)
            shutil.copy2(src_pdf, dest_pdf)
            print(f"Copied Catalogue: {pdf_file}")

# WRITE BACK OVER THE JAVASCRIPT STORE
print(f"\nWriting {len(all_products)} loaded products to {data_js_path}...")
js_content = f"// AUTO-GENERATED MASTER DATA STORE\nexport const products = {json.dumps(all_products, indent=2)};\n"

with open(data_js_path, 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Successfully bridged {len(all_products)} entries into the main Web App environment!")
