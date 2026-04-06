import json
import os

data_js_path = os.path.abspath(os.path.join('src', 'data', 'products.js'))
with open(data_js_path, 'r', encoding='utf-8') as file:
    content = file.read()
    json_str = content.replace('// AUTO-GENERATED MASTER DATA STORE\nexport const products = ', '')[:-2]
    try:
        products = json.loads(json_str)
        companies_seen = {}
        for p in products:
            comp = p.get('company', '')
            if comp not in companies_seen:
                img_val = p.get('specifications', {}).get('Product Images**', '')
                print(f"Company: {comp} | Image Config Example: {img_val}")
                companies_seen[comp] = True
    except Exception as e:
        print("Parse error:", e)
