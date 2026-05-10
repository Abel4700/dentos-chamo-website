import { createClient } from '@sanity/client'
import * as XLSX from 'xlsx'
import fs from 'fs'

const client = createClient({
  projectId: 'ousbvhh0',
  dataset: 'production',
  useCdn: false,
  token: 'sksZEnydMgSiD1XMQWlgo2wsVwNq7ph2TBCLvLBd05iW1zCuP77lXks7kDVeeVm1C1U3SKMTGjHxO88PKpF9HFjHYoP9iBy1okMxpqrLwFXDz3Aso80tDc7MSvcCIr9HLWHG4NfxPHLuNFFZHt3aGC7mfkJ5pgMoGZpoIb2uY9RNZpskwdoc',
  apiVersion: '2024-05-01'
})

async function exportToExcel() {
  console.log('Fetching data from Sanity...')
  
  const query = `*[_type == "product"] | order(displayOrder asc) {
    productId,
    "category": category->title,
    subcategory,
    productName,
    brand,
    genericName,
    "manufacturer": manufacturer->name,
    manufacturerName,
    countryOfOrigin,
    shortDescription,
    fullDescription,
    intendedUse,
    keyFeatures,
    benefits,
    "specifications": specificationGroups[0].items[0].value,
    materialComposition,
    sterileStatus,
    shelfLife,
    storageConditions,
    price,
    priceType,
    packSize,
    availability,
    minimumOrderQuantity,
    certification,
    regulatoryInfo,
    featuredProduct,
    displayOrder,
    "imageUrl": mainImage.asset->url,
    "datasheetUrl": datasheetPdf.asset->url
  }`

  const products = await client.fetch(query)
  console.log(`Fetched ${products.length} products. Converting to Excel...`)

  const worksheetData = products.map(p => ({
    'Product ID': p.productId,
    'Category': p.category,
    'Subcategory': p.subcategory,
    'Product Name': p.productName,
    'Brand': p.brand,
    'Generic Name': p.genericName,
    'Manufacturer (System)': p.manufacturer,
    'Manufacturer Name (Display)': p.manufacturerName,
    'Country of Origin': p.countryOfOrigin,
    'Short Description': p.shortDescription,
    'Full Description': p.fullDescription,
    'Intended Use': p.intendedUse,
    'Key Features': p.keyFeatures,
    'Benefits': p.benefits,
    'Specifications': p.specifications,
    'Material Composition': p.materialComposition,
    'Sterile / Non-Sterile': p.sterileStatus,
    'Shelf Life': p.shelfLife,
    'Storage Conditions': p.storageConditions,
    'Price': p.price,
    'Price Type': p.priceType,
    'Pack Size': p.packSize,
    'Availability': p.availability,
    'Minimum Order Quantity': p.minimumOrderQuantity,
    'Certification': p.certification,
    'Regulatory Info': p.regulatoryInfo,
    'Featured Product': p.featuredProduct ? 'Yes' : 'No',
    'Display Order': p.displayOrder,
    'Image URL': p.imageUrl,
    'Datasheet PDF URL': p.datasheetUrl
  }))

  const workbook = XLSX.utils.book_new()
  const worksheet = XLSX.utils.json_to_sheet(worksheetData)
  
  const wscols = [
    {wch: 12}, {wch: 20}, {wch: 25}, {wch: 40}, {wch: 20}, 
    {wch: 30}, {wch: 25}, {wch: 25}, {wch: 20}, {wch: 50},
    {wch: 80}, {wch: 50}, {wch: 50}, {wch: 50}, {wch: 80}
  ]
  worksheet['!cols'] = wscols

  XLSX.utils.book_append_sheet(workbook, worksheet, 'Products Master')
  
  const fileName = 'Dentose_Chamo_Product_Catalog_Export.xlsx'
  XLSX.writeFile(workbook, fileName)
  
  console.log(`Success! Data exported to ${fileName}`)
}

exportToExcel().catch(console.error)
