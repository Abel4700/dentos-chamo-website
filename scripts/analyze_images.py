"""
Phase 1 Diagnostic: Scan all extracted images and analyze their dimensions.
This will help us understand the mix of junk (logos/icons) vs real product photos.
"""
import os
from PIL import Image

base_docs = r'D:\Clean Data Services\Projects\2026 - Projects\Dentose Chamo\Docs for Website'
extracted_images_dir = os.path.join(base_docs, 'extracted_images')

if not os.path.exists(extracted_images_dir):
    print("ERROR: extracted_images directory not found!")
    exit()

stats = {
    'total': 0,
    'tiny': [],       # < 100x100 (icons/badges)
    'small': [],      # 100-200 px (logos)
    'medium': [],     # 200-500 px (might be product photos)
    'large': [],      # > 500 px (likely real product photos)
    'banners': [],    # very wide/short (decorative)
    'errors': []
}

for fname in os.listdir(extracted_images_dir):
    if not fname.lower().endswith(('.jpg', '.jpeg', '.png', '.webp')):
        continue
    stats['total'] += 1
    fpath = os.path.join(extracted_images_dir, fname)
    try:
        with Image.open(fpath) as img:
            w, h = img.size
            aspect = w / h if h > 0 else 999
            
            if w < 100 or h < 100:
                stats['tiny'].append((fname, w, h))
            elif w < 200 or h < 200:
                stats['small'].append((fname, w, h))
            elif aspect > 4.0:
                stats['banners'].append((fname, w, h))
            elif w > 500 or h > 500:
                stats['large'].append((fname, w, h))
            else:
                stats['medium'].append((fname, w, h))
    except Exception as e:
        stats['errors'].append(fname)

print(f"\n=== IMAGE ANALYSIS REPORT ===")
print(f"Total images: {stats['total']}")
print(f"Tiny (<100px - icons/badges):  {len(stats['tiny'])}")
print(f"Small (100-200px - logos):     {len(stats['small'])}")
print(f"Banner/wide (aspect >4x):      {len(stats['banners'])}")
print(f"Medium (200-500px):            {len(stats['medium'])}")
print(f"Large (>500px, likely products): {len(stats['large'])}")
print(f"Errors (corrupt/unreadable):   {len(stats['errors'])}")

# Samples of each category
if stats['tiny']:
    print(f"\nSample tiny images: {stats['tiny'][:5]}")
if stats['small']:
    print(f"Sample small images: {stats['small'][:5]}")
if stats['banners']:
    print(f"Sample banners: {stats['banners'][:5]}")

print(f"\nJunk candidates (tiny+small+banners): {len(stats['tiny']) + len(stats['small']) + len(stats['banners'])}")
print(f"Good candidates (medium+large):      {len(stats['medium']) + len(stats['large'])}")
