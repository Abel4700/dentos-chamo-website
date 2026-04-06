import pandas as pd
import os

base_docs = r'D:\Clean Data Services\Projects\2026 - Projects\Dentose Chamo\Docs for Website'
catalogues_dir = os.path.join(base_docs, 'Catalogues')
extracted_images_dir = os.path.join(base_docs, 'extracted_images')

master_file = ""
for f in os.listdir(catalogues_dir):
    if f.endswith('.xlsx') or f.endswith('.csv'):
        if 'product_catalogue_master' in f.lower():
            master_file = f
            break

if not master_file:
    print("Could not find a Product_Catalogue_Master Excel file in Catalogues folder!")
else:
    print(f"Found: {master_file}")
    df = pd.read_excel(os.path.join(catalogues_dir, master_file))
    print("Columns:", df.columns.tolist())
    print(df.head(3))
    print(f"Total rows: {len(df)}")
