import os

path = r'D:\Clean Data Services\Projects\2026 - Projects\Dentose Chamo\Docs for Website'
for root, dirs, files in os.walk(path):
    img_files = [f for f in files if f.endswith(('.jpg', '.jpeg', '.png'))]
    if img_files:
        print(f"Directory: {root}")
        print(f"Image count: {len(img_files)}")
        print(f"Sample images: {img_files[:5]}")
        print("-" * 40)
