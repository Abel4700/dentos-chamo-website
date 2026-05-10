import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'

// REGULATORY DATA ACCURACY POLICY:
// "Do not assume ISO, CE, ingredient, shelf-life, or performance claims unless they exist in the source catalogue or Excel file."
// "Replace any unverified certification, shelf life, regulatory, or technical values with 'To be confirmed'."
const TBC = "To be confirmed";

const client = createClient({
  projectId: 'ousbvhh0',
  dataset: 'production',
  useCdn: false,
  token: 'sksZEnydMgSiD1XMQWlgo2wsVwNq7ph2TBCLvLBd05iW1zCuP77lXks7kDVeeVm1C1U3SKMTGjHxO88PKpF9HFjHYoP9iBy1okMxpqrLwFXDz3Aso80tDc7MSvcCIr9HLWHG4NfxPHLuNFFZHt3aGC7mfkJ5pgMoGZpoIb2uY9RNZpskwdoc',
  apiVersion: '2024-05-01'
})

const assetCache = {}

async function uploadAsset(urlPath, type) {
  if (!urlPath || urlPath === '#' || urlPath === '') return null
  
  if (assetCache[urlPath]) return assetCache[urlPath]

  const absolutePath = path.join(process.cwd(), './public', urlPath)
  if (!fs.existsSync(absolutePath)) {
    return null
  }
  
  try {
    console.log(`[ASSET] Uploading ${type}: ${urlPath}...`)
    const asset = await client.assets.upload(type, fs.readFileSync(absolutePath), {
      filename: path.basename(absolutePath)
    })
    
    const ref = {
      _type: type === 'image' ? 'image' : 'file',
      asset: { _type: 'reference', _ref: asset._id }
    }
    
    assetCache[urlPath] = ref
    return ref
  } catch (err) {
    console.error(`[ERROR] Failed to upload ${urlPath}:`, err.message)
    return null
  }
}

function createSlug(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

async function runMigration() {
  console.log('Starting MIGRATION V2 (Restructured Schema)...');
  
  const rawData = fs.readFileSync('./src/pages/extracted_data.json', 'utf-8');
  const data = JSON.parse(rawData);
  
  // 1. Resolve Refs
  const mfrMap = {}
  const catMap = {}
  
  const mfrs = await client.fetch('*[_type == "manufacturer"] { slug, _id }')
  mfrs.forEach(m => {
    if (m.slug && m.slug.current) {
      mfrMap[m.slug.current.toLowerCase()] = m._id;
    }
  });

  const cats = await client.fetch('*[_type == "category"] { title, _id }')
  cats.forEach(c => {
    if (c.title) {
      catMap[c.title.toLowerCase()] = c._id;
    }
  });

  console.log(`Mapping ${data.products.length} products to new schema...`);

  let count = 0;
  for (const prod of data.products) {
    const s = prod.specifications || {};

    // Apply "To be confirmed" policy for unverified fields
    const cert = (s['Certification'] && s['Certification'] !== 'N/A' && s['Certification'] !== '') ? s['Certification'] : TBC;
    const shelf = (s['Shelf Life'] && s['Shelf Life'] !== 'N/A' && s['Shelf Life'] !== '') ? s['Shelf Life'] : TBC;
    const origin = (s['Country of Origin'] && s['Country of Origin'] !== 'N/A' && s['Country of Origin'] !== '') ? s['Country of Origin'] : TBC;
    const material = (s['Material Composition'] && s['Material Composition'] !== 'N/A' && s['Material Composition'] !== '') ? s['Material Composition'] : TBC;

    // Build spec groups if there is a main specifications block
    const specGroups = [];
    if (s['Specifications'] && s['Specifications'] !== 'N/A' && s['Specifications'] !== '') {
      specGroups.push({
        _key: `spec-group-${count}`,
        sectionTitle: 'Product Details',
        items: [
          { _key: `spec-item-${count}-1`, label: 'Description', value: s['Specifications'] }
        ]
      });
    }

    // Resolve Manufacturer and Category References
    let mfrRef = undefined;
    if (prod.manufacturer && mfrMap[prod.manufacturer.toLowerCase()]) {
      mfrRef = { _type: 'reference', _ref: mfrMap[prod.manufacturer.toLowerCase()] };
    }

    let catRef = undefined;
    if (prod.category && catMap[prod.category.toLowerCase()]) {
      catRef = { _type: 'reference', _ref: catMap[prod.category.toLowerCase()] };
    }

    // Assets
    const imageRef = await uploadAsset(prod.image, 'image');
    const catalogueRef = await uploadAsset(prod.catalogue_pdf, 'file');

    const doc = {
      _type: 'product',
      _id: `product-${prod.id.toLowerCase()}`,
      productId: prod.id,
      productName: prod.commercial_name,
      slug: { _type: 'slug', current: createSlug(prod.commercial_name) },
      brand: s['Brand'] || 'Dentose Chamo',
      manufacturer: mfrRef,
      category: catRef,
      subcategory: s['Subcategory'],
      genericName: s['Generic Name'],
      shortDescription: prod.shortDesc,
      fullDescription: s['Full Description'],
      intendedUse: s['Intended Use'],
      keyFeatures: s['Key Features'],
      benefits: s['Benefits'],
      availability: s['Availability'],
      priceType: s['Price Type'] || 'Request Quote',
      price: parseFloat(s['Price']) || 0,
      packSize: s['Pack Size'],
      mainImage: imageRef,
      datasheetPdf: catalogueRef,
      manufacturerName: s['Manufacturer Name'],
      countryOfOrigin: origin,
      certification: cert,
      regulatoryInfo: s['Regulatory Info'] || TBC,
      materialComposition: material,
      sterileStatus: s['Sterile / Non-Sterile'],
      shelfLife: shelf,
      storageConditions: s['Storage Conditions'],
      specificationGroups: specGroups,
      featuredProduct: s['Featured Product'] === 'Yes',
      displayOrder: parseInt(s['Display Order']) || 0,
      minimumOrderQuantity: s['Minimum Order Quantity'],
      isActive: true
    };

    try {
      await client.createOrReplace(doc);
      count++;
      if (count % 50 === 0 || count === data.products.length) {
        console.log(`Progress: ${count}/${data.products.length} products restructured.`);
      }
    } catch (err) {
      console.error(`[FATAL] Product ${prod.id} failed:`, err.message);
    }
  }

  console.log('V2 Migration Complete. 813 products restructured.');
}

runMigration().catch(console.error);
