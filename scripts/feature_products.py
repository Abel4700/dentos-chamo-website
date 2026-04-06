"""
Step 2 (Improved): Enrich products.js with accurate manufacturer mappings
based on generic datasheet filenames and auto-select top 12 per brand.
"""
import json, os

data_js_path = os.path.abspath(os.path.join('src', 'data', 'products.js'))

# ── PDF catalogue map: manufacturer slug → public PDF path ──────
PDF_MAP = {
    'accu-med':      '/catalogues/Accu_Med_Maxilo_Cataloguel.pdf',
    'oradox':        '/catalogues/Oradox_Catalogue.pdf',
    'ires':          '/catalogues/Ires_Catalogue.pdf',
    'topzir':        '/catalogues/Topzir_Products_Catalogue_2026.pdf',
    'pyrax':         '/catalogues/Pyrax_Catalouge.pdf',
    'durable':       '/catalogues/Durable_Product_Catalogue.pdf',
    'precident':     '/catalogues/Precident_Product Catalogue.pdf',
    'prevest':       '/catalogues/Prevest-Denpro-Catalog-2026.pdf',
    'ramo':          '/catalogues/Ramo_Endodontic Catalogue.pdf',
}

# ── Company parent lookup ────────────────────────────────────────
COMPANY_MAP = {
    'accu-med': 'dentose',
    'ires':     'dentose',
    'pyrax':    'dentose',
    'durable':  'dentose',
    'precident':'dentose',
    'prevest':  'dentose',
    'ramo':     'dentose',
    'oradox':   'oradent',
    'topzir':   'topzir',
}

# ── Reverse Mapping from Generic Filenames ───────────────────────
DATASHEET_TO_MFR = {
    'accu-med maxilo final.pdf': 'accu-med',
    'catalog.pdf': 'ires',
    'product catalog.pdf': 'durable',
    'product catalog (2).pdf': 'pyrax',
    'pyrax_catalouge_english_french (1)-compressed (4) - copy.pdf': 'pyrax',
    'oradox catalog-1 (3).pdf': 'oradox',
    'precident_product catalogue.pdf': 'precident',
    'prevest-denpro-catalog-2026.pdf': 'prevest',
    'ramo_endodontic catalogue.pdf': 'ramo',
    'topzir products catalogue 2026.pdf': 'topzir',
    '5. topzir products catalogue 2026.pdf': 'topzir'
}

def detect_manufacturer(product):
    """Refined manufacturer detection."""
    specs = product.get('specifications') or {}
    
    # Check Datasheet field first (highest reliability for the 'unknown' group)
    # Be careful with case sensitivity and stripping
    ds_raw = specs.get('Datasheet (PDF)') or specs.get('Datasheet (PDF)**') or ''
    ds_clean = ds_raw.strip().lower()
    
    if ds_clean in DATASHEET_TO_MFR:
        return DATASHEET_TO_MFR[ds_clean]

    # Fallback to Brand/Name check
    brand_raw = (specs.get('Brand') or specs.get('Brand*') or specs.get('Manufacturer Name') or '').lower()
    name_raw = (product.get('commercial_name') or '').lower()
    
    if 'topzir' in brand_raw or 'topzir' in name_raw: return 'topzir'
    if 'oradox' in brand_raw or 'oradox' in name_raw: return 'oradox'
    if 'accu-med' in brand_raw or 'accu' in brand_raw: return 'accu-med'
    if 'ires' in brand_raw or 'ires' in name_raw: return 'ires'
    if 'pyrax' in brand_raw or 'pyrax' in name_raw: return 'pyrax'
    if 'durable' in brand_raw or 'durable' in name_raw: return 'durable'
    if 'precident' in brand_raw or 'precident' in name_raw: return 'precident'
    if 'prevest' in brand_raw or 'prevest' in name_raw: return 'prevest'
    if 'ramo' in brand_raw or 'ramo' in name_raw: return 'ramo'

    # Hardcoded ID prefix checks if any
    pid = product.get('id', '').lower()
    if pid.startswith('tz-'): return 'topzir'
    
    return 'unknown'

def score_product(p):
    score = 0
    if p.get('image'): score += 2  # Image is very important for featured
    specs = p.get('specifications') or {}
    short = specs.get('Short Description') or specs.get('Short Description*') or ''
    full  = specs.get('Full Description') or specs.get('Full Description*') or specs.get('Specifications') or ''
    if len(short) > 10: score += 1
    if len(full)  > 20: score += 1
    # Prefer products with specific brands over "Generic"
    if specs.get('Brand') and str(specs.get('Brand')).lower() != 'generic':
        score += 1
    return score

# ── Load ────────────────────────────────────────────────────────
with open(data_js_path, 'r', encoding='utf-8') as f:
    text = f.read()
json_str = text.split("export const products = ")[1].strip().rstrip(';')
products = json.loads(json_str)

# ── Reset and Enrich ────────────────────────────────────────────
for p in products:
    mfr = detect_manufacturer(p)
    p['manufacturer'] = mfr
    p['company'] = COMPANY_MAP.get(mfr, 'dentose')
    p['catalogue_pdf'] = PDF_MAP.get(mfr, '')
    p['featured'] = False # Reset all

# ── Featured Selection ──────────────────────────────────────────
from collections import defaultdict
by_mfr = defaultdict(list)
for i, p in enumerate(products):
    if p['manufacturer'] != 'unknown':
        by_mfr[p['manufacturer']].append((i, p))

print("\nCurated Selection (Top 12 per manufacturer):")
for mfr in sorted(PDF_MAP.keys()):
    items = by_mfr[mfr]
    # Sort by score
    scored = sorted(items, key=lambda x: score_product(x[1]), reverse=True)
    selected = scored[:12]
    for idx, _ in selected:
        products[idx]['featured'] = True
    print(f"  {mfr:15s} — {len(items):4d} total → {len(selected)} featured")

# ── Write back ───────────────────────────────────────────────────
js_content = ("// AUTO-GENERATED MASTER DATA STORE\n"
             f"export const products = {json.dumps(products, indent=2)};\n")
with open(data_js_path, 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"\nFinal count: {sum(1 for p in products if p['featured'])} products marked featured.")
