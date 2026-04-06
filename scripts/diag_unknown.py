"""Diagnostic: show what datasheet values exist for the 'unknown' group."""
import json, os
from collections import Counter

data_js_path = os.path.abspath(os.path.join('src', 'data', 'products.js'))
with open(data_js_path, 'r', encoding='utf-8') as f:
    text = f.read()
json_str = text.split("export const products = ")[1].strip().rstrip(';')
products = json.loads(json_str)

ds_vals = Counter()
brand_vals = Counter()
for p in products:
    if p.get('manufacturer') == 'unknown':
        specs = p.get('specifications') or {}
        ds = specs.get('Datasheet (PDF)') or specs.get('Datasheet (PDF)**') or ''
        br = specs.get('Brand') or specs.get('Brand*') or ''
        if ds: ds_vals[ds] += 1
        if br: brand_vals[br] += 1

print("== Top Datasheet values in 'unknown' group ==")
for val, cnt in ds_vals.most_common(20):
    print(f"  {cnt:4d}x  {val}")

print("\n== Top Brand values in 'unknown' group ==")
for val, cnt in brand_vals.most_common(20):
    print(f"  {cnt:4d}x  {val}")
