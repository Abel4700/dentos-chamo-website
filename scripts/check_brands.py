import pandas as pd
import os

base_docs = r'D:\Clean Data Services\Projects\2026 - Projects\Dentose Chamo\Docs for Website'
catalogues_dir = os.path.join(base_docs, 'Catalogues')

df = pd.read_excel(os.path.join(catalogues_dir, 'Product_Catalogue_Master.xlsx'))

if 'Brand' in df.columns:
    print("Unique Brands:", df['Brand'].unique())
    
if 'Manufacturer Name' in df.columns:
    print("Unique Manufacturers:", df['Manufacturer Name'].unique())
    
if 'Datasheet (PDF)' in df.columns:
    print("Unique Datasheets:", df['Datasheet (PDF)'].unique())

print("If you want more grouping, we can filter using any of the above.")
