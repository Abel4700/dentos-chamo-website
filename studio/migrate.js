import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'

const client = createClient({
  projectId: 'ousbvhh0',
  dataset: 'production',
  useCdn: false,
  token: 'sksZEnydMgSiD1XMQWlgo2wsVwNq7ph2TBCLvLBd05iW1zCuP77lXks7kDVeeVm1C1U3SKMTGjHxO88PKpF9HFjHYoP9iBy1okMxpqrLwFXDz3Aso80tDc7MSvcCIr9HLWHG4NfxPHLuNFFZHt3aGC7mfkJ5pgMoGZpoIb2uY9RNZpskwdoc',
  apiVersion: '2024-05-01'
})

const assetCache = {}

async function uploadAsset(urlPath, type) {
  if (!urlPath || urlPath === '#') return null
  
  if (assetCache[urlPath]) {
    return assetCache[urlPath]
  }

  const absolutePath = path.join(process.cwd(), '../public', urlPath)
  if (!fs.existsSync(absolutePath)) {
    console.log(`[WARNING] Missing ${type} file: ${absolutePath}`)
    return null
  }
  
  try {
    console.log(`[ASSET] Uploading ${type}: ${absolutePath}...`)
    const asset = await client.assets.upload(type, fs.readFileSync(absolutePath), {
      filename: path.basename(absolutePath)
    })
    console.log(`[ASSET] Uploaded ${type}: ${asset._id}`)
    
    const ref = {
      _type: type === 'image' ? 'image' : 'file',
      asset: { _type: 'reference', _ref: asset._id }
    }
    
    assetCache[urlPath] = ref
    return ref
  } catch (err) {
    console.error(`[ERROR] Failed to upload ${absolutePath}:`, err.message)
    return null
  }
}

async function migrate() {
  console.log('Starting migration (WITH IMAGES AND PDFs)...')
  const rawData = fs.readFileSync('../src/pages/extracted_data.json', 'utf-8')
  const data = JSON.parse(rawData)
  
  const mfrMap = {}
  const catMap = {}

  // 1. Migrate Manufacturers (Skipped - already existing or secondary)
  /*
  console.log(`Found ${data.manufacturers.length} manufacturers. Migrating...`)
  for (const mfr of data.manufacturers) {
    // ...
  }
  */

  // 2. Extract and Migrate Categories (Skipped - already existing or secondary)
  /*
  console.log('Extracting categories from products...')
  for (const cat of categories) {
    // ...
  }
  */

  // Fill maps from existing Sanity data if needed, but for now we assume they are there
  // or we just use the IDs we know.
  const mfrs = await client.fetch('*[_type == "manufacturer"] { "slug": slug.current, _id }')
  mfrs.forEach(m => mfrMap[m.slug] = m._id)

  const cats = await client.fetch('*[_type == "category"] { "title": title, _id }')
  cats.forEach(c => catMap[c.title] = c._id)

  // 3. Migrate Products
  console.log(`Migrating ${data.products.length} products...`)
  
  // Fetch existing products to see what's already there and skip if possible
  console.log('Fetching existing products to resume migration...')
  const existingDocs = await client.fetch('*[_type == "product"] { "prodId": id, "hasImage": defined(image.asset) }')
  const existingMap = {}
  existingDocs.forEach(d => {
    if (d.prodId) existingMap[d.prodId] = d.hasImage
  })
  console.log(`Found ${Object.keys(existingMap).length} existing products in Sanity.`)

  let count = 0;
  let skipped = 0;
  for (const prod of data.products) {
    
    // Resume logic: Skip if already has image (suggests successful migration)
    if (existingMap[prod.id]) {
      skipped++
      count++
      if (skipped % 50 === 0) console.log(`Skipped ${skipped} products (already have images)`)
      continue
    }

    if (skipped > 0 && count === skipped) {
       console.log(`Resuming migration from product ${prod.id} (index ${count})`)
    }

    // Resolve refs
    let mfrRef = undefined
    if (prod.manufacturer && mfrMap[prod.manufacturer.toLowerCase()]) {
      mfrRef = { _type: 'reference', _ref: mfrMap[prod.manufacturer.toLowerCase()] }
    }
    let catRef = undefined
    if (prod.category && catMap[prod.category]) {
      catRef = { _type: 'reference', _ref: catMap[prod.category] }
    }

    const imageRef = await uploadAsset(prod.image, 'image')
    // const catalogueRef = await uploadAsset(prod.catalogue_pdf, 'file')

    const doc = {
      _type: 'product',
      _id: `product-${prod.id.toLowerCase()}`,
      id: prod.id,
      commercial_name: prod.commercial_name,
      shortDesc: prod.shortDesc,
      company: prod.company,
      segment: prod.segment,
      featured: prod.featured || false,
      manufacturer: mfrRef,
      category: catRef,
      image: imageRef,
      // catalogue_pdf: catalogueRef,
      specifications: {
        subcategory: prod.specifications?.Subcategory,
        brand: prod.specifications?.Brand,
        genericName: prod.specifications?.['Generic Name'],
        countryOfOrigin: prod.specifications?.['Country of Origin'],
        fullDescription: prod.specifications?.['Full Description'],
        intendedUse: prod.specifications?.['Intended Use'],
        keyFeatures: prod.specifications?.['Key Features'],
        benefits: prod.specifications?.Benefits,
        specificationsText: prod.specifications?.Specifications,
        materialComposition: prod.specifications?.['Material Composition'],
        sterile: prod.specifications?.['Sterile / Non-Sterile'],
        shelfLife: prod.specifications?.['Shelf Life'],
        storageConditions: prod.specifications?.['Storage Conditions'],
        priceType: prod.specifications?.['Price Type'],
        packSize: prod.specifications?.['Pack Size'],
        availability: prod.specifications?.Availability,
        minimumOrderQuantity: prod.specifications?.['Minimum Order Quantity'],
        certification: prod.specifications?.Certification,
        displayOrder: parseInt(prod.specifications?.['Display Order']) || 0
      }
    }

    try {
      await client.createOrReplace(doc)
      count++
      if (count % 10 === 0 || count === data.products.length) {
        console.log(`Migrated ${count}/${data.products.length} products`)
      }
    } catch (err) {
      console.error(`[ERROR] Failed to migrate product ${prod.id}:`, err.message)
    }
  }

  console.log('Migration complete!')
}

migrate().catch(err => {
  console.error('FATAL ERROR during migration:', err)
  process.exit(1)
})

