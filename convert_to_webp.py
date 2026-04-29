import os
from PIL import Image

assets_dir = r"c:\Users\abelg\.gemini\antigravity\scratch\dentos-chamo-website\src\assets"

files_to_convert = [
    "accu-med-transparent-logo.png",
    "ramo_medical_logo.png",
    "durable-hospital-supplies-logo.png",
    "sincere-people-instruments.png",
    "precident-logo.jpg"
]

for filename in files_to_convert:
    filepath = os.path.join(assets_dir, filename)
    if os.path.exists(filepath):
        img = Image.open(filepath)
        webp_filename = os.path.splitext(filename)[0] + ".webp"
        webp_filepath = os.path.join(assets_dir, webp_filename)
        img.save(webp_filepath, "WEBP")
        print(f"Converted {filename} to {webp_filename}")
    else:
        print(f"File not found: {filename}")
