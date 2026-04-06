import pandas as pd
import shutil
import os

path_base = r'D:\Clean Data Services\Projects\2026 - Projects\Dentose Chamo\Docs for Website\Scrapped Catalogue Products'
f = 'IRES_Product_Master_Data_Filled.xlsx'
full_path = os.path.join(path_base, f)

temp_path = "temp_" + f
try:
    shutil.copy2(full_path, temp_path)
    # Check rows 0-5 to see where headers begin
    df = pd.read_excel(temp_path, nrows=5)
    for index, row in df.iterrows():
        print(f"Row {index}: {list(row.values)}")
except Exception as e:
    print(f"Error: {e}")
finally:
    if os.path.exists(temp_path):
        os.remove(temp_path)
