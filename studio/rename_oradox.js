import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'ousbvhh0',
  dataset: 'production',
  useCdn: false,
  token: 'sksZEnydMgSiD1XMQWlgo2wsVwNq7ph2TBCLvLBd05iW1zCuP77lXks7kDVeeVm1C1U3SKMTGjHxO88PKpF9HFjHYoP9iBy1okMxpqrLwFXDz3Aso80tDc7MSvcCIr9HLWHG4NfxPHLuNFFZHt3aGC7mfkJ5pgMoGZpoIb2uY9RNZpskwdoc',
  apiVersion: '2024-05-01'
})

async function renameOradoxIds() {
  console.log('Fetching Oradox products...')
  
  // Fetch Oradox products ordered by their current ID (to keep some logical order)
  const products = await client.fetch(`*[_type == "product" && manufacturer->slug.current == "oradox"] | order(productName asc) {
    _id,
    productName,
    productId
  }`)

  console.log(`Found ${products.length} Oradox products.`)

  let startNum = 798
  
  for (const p of products) {
    const newId = `DTC-${startNum.toString().padStart(4, '0')}`
    console.log(`Renaming: ${p.productName} | ${p.productId} -> ${newId}`)
    
    await client.patch(p._id).set({ productId: newId }).commit()
    
    startNum++
  }

  console.log('Successfully standardized all Oradox IDs!')
}

renameOradoxIds().catch(console.error)
