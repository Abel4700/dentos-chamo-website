import pandas as pd
import os
import json

base_docs = r'D:\Clean Data Services\Projects\2026 - Projects\Dentose Chamo\Docs for Website'
catalogues_dir = os.path.join(base_docs, 'Catalogues')
scraped_dir = os.path.join(base_docs, 'Scrapped Catalogue Products') if os.path.exists(os.path.join(base_docs, 'Scrapped Catalogue Products')) else None

sources = {}

# 1. Master catalogue
master_path = os.path.join(catalogues_dir, 'Product_Catalogue_Master.xlsx')
if os.path.exists(master_path):
    df = pd.read_excel(master_path, nrows=3)
    sources['Product_Catalogue_Master.xlsx'] = df.columns.tolist()

# 2. Any other xlsx files in Catalogues
for f in os.listdir(catalogues_dir):
    if f.endswith('.xlsx') and f != 'Product_Catalogue_Master.xlsx':
        try:
            df2 = pd.read_excel(os.path.join(catalogues_dir, f), nrows=3)
            sources[f] = df2.columns.tolist()
        except: pass

# 3. Scrapped Catalogue Products folder
if scraped_dir and os.path.exists(scraped_dir):
    for f in os.listdir(scraped_dir):
        if f.endswith('.xlsx'):
            try:
                df3 = pd.read_excel(os.path.join(scraped_dir, f), nrows=3)
                sources[f] = df3.columns.tolist()
            except: pass

# Print all schemas
for source, cols in sources.items():
    print(f"\n{'='*60}")
    print(f"FILE: {source}")
    print(f"COLUMNS ({len(cols)}):")
    for i, c in enumerate(cols, 1):
        print(f"  {i:02d}. {c}")
