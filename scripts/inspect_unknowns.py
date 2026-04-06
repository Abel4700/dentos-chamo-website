import json, os

data_js_path = os.path.abspath(os.path.join('src', 'data', 'products.js'))
with open(data_js_path, 'r', encoding='utf-8') as f:
    text = f.read()
json_str = text.split("export const products = ")[1].strip().rstrip(';')
products = json.loads(json_str)

unknowns = [p for p in products if p.get('manufacturer') == 'unknown']
print(f"Total unknowns: {len(unknowns)}")
for p in unknowns[:10]:
    print(f"ID: {p['id']}, Name: {p['commercial_name']}, Cat: {p['category']}")
    print(f"  Specs: {p['specifications'].get('Brand', '')} | {p['specifications'].get('Datasheet (PDF)', '')}")
    print("-" * 30)
