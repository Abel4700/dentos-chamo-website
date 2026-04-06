import pandas as pd
import os
import shutil
import json

base_docs = r'D:\Clean Data Services\Projects\2026 - Projects\Dentose Chamo\Docs for Website'
scraped_dir = os.path.join(base_docs, 'Scrapped Catalogue Products')
extracted_images_dir = os.path.join(base_docs, 'extracted_images')
public_img_dir = os.path.abspath(os.path.join('public', 'images', 'products'))

os.makedirs(public_img_dir, exist_ok=True)

excel_file = "Dentose_Product_Master_Structured_v2.xlsx"
full_path = os.path.join(scraped_dir, excel_file)
if not os.path.exists(full_path):
    print("File not found:", full_path)
    exit()

print("Processing Dentose Catalog...")
import openpyxl 
df = pd.read_excel(full_path) # Not skipping rows, let's see how it's structured!
cols = df.columns.tolist()
print("Columns:", cols)
print(df.head(2))

# Load the existing products.js to append, instead of overwriting
data_js_path = os.path.abspath(os.path.join('src', 'data', 'products.js'))
with open(data_js_path, 'r', encoding='utf-8') as file:
    content = file.read()
    json_str = content.replace('// AUTO-GENERATED MASTER DATA STORE\nexport const products = ', '').strip()
    if json_str.endswith(';'): json_str = json_str[:-1]
    
all_products = json.loads(json_str)
print("Currently loaded products:", len(all_products))
