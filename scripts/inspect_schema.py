import pandas as pd
import json
import os

path_base = r'D:\Clean Data Services\Projects\2026 - Projects\Dentose Chamo\Docs for Website\Scrapped Catalogue Products'
files = [
    'IRES_Product_Master_Data_Filled.xlsx',
    'Topzir_Product_Master_Data_Populated_V1.xlsx',
    'Accu_Med_Product_Master_Data_Populated.xlsx'
]

for f in files:
    full_path = os.path.join(path_base, f)
    print(f"\n--- Checking {f} ---")
    try:
        df = pd.read_excel(full_path, nrows=1)
        print(f"Columns: {df.columns.tolist()}")
        print(f"Row 1: {df.iloc[0].to_dict()}")
    except Exception as e:
        print(f"Failed to read {f}: {e}")
