import os
import json

base_docs = r'D:\Clean Data Services\Projects\2026 - Projects\Dentose Chamo\Docs for Website'
catalogues_dir = os.path.join(base_docs, 'Catalogues')
public_cat_dir = os.path.abspath(os.path.join('public', 'catalogues'))
data_js_path = os.path.abspath(os.path.join('src', 'data', 'products.js'))

# 1. List available PDFs
print("=== AVAILABLE PDF CATALOGUES ===")
pdf_files = []
if os.path.exists(catalogues_dir):
    for f in os.listdir(catalogues_dir):
        if f.lower().endswith('.pdf'):
            size_mb = os.path.getsize(os.path.join(catalogues_dir, f)) / (1024*1024)
            print(f"  {f} ({size_mb:.1f} MB)")
            pdf_files.append(f)

if os.path.exists(public_cat_dir):
    print("\n=== PDFs already in /public/catalogues ===")
    for f in os.listdir(public_cat_dir):
        if f.lower().endswith('.pdf'):
            print(f"  {f}")

# 2. Product count per company
print("\n=== PRODUCT COUNT BY COMPANY ===")
with open(data_js_path, 'r', encoding='utf-8') as f:
    text = f.read()
    json_str = text.split("export const products = ")[1].strip().rstrip(';')
    products = json.loads(json_str)

company_stats = {}
for p in products:
    co = p.get('company', 'unknown')
    cat = p.get('category', 'Unknown')
    if co not in company_stats:
        company_stats[co] = {'total': 0, 'categories': {}}
    company_stats[co]['total'] += 1
    company_stats[co]['categories'][cat] = company_stats[co]['categories'].get(cat, 0) + 1

for co, stats in sorted(company_stats.items()):
    print(f"\n  {co.upper()} — {stats['total']} products")
    for cat, cnt in sorted(stats['categories'].items(), key=lambda x: -x[1])[:5]:
        print(f"    └ {cat}: {cnt}")
