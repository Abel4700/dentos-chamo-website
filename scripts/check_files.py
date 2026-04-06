import os

base_docs = r'D:\Clean Data Services\Projects\2026 - Projects\Dentose Chamo\Docs for Website'
scraped_dir = os.path.join(base_docs, 'Scrapped Catalogue Products')

print("Files in", scraped_dir)
if os.path.exists(scraped_dir):
    for f in os.listdir(scraped_dir):
        print("-", f)
else:
    print("DIR DOES NOT EXIST!")
