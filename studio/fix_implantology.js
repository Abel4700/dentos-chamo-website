import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'ousbvhh0',
  dataset: 'production',
  useCdn: false,
  token: 'sksZEnydMgSiD1XMQWlgo2wsVwNq7ph2TBCLvLBd05iW1zCuP77lXks7kDVeeVm1C1U3SKMTGjHxO88PKpF9HFjHYoP9iBy1okMxpqrLwFXDz3Aso80tDc7MSvcCIr9HLWHG4NfxPHLuNFFZHt3aGC7mfkJ5pgMoGZpoIb2uY9RNZpskwdoc',
  apiVersion: '2024-05-01'
})

async function fixImplantology() {
  console.log('Fixing Implantology Category issues...')

  // 1. Publish the category if it's in draft
  const draftCat = await client.getDocument('drafts.cat-implantology')
  if (draftCat) {
    console.log('Syncing category document to published ID...')
    const { _id, ...rest } = draftCat
    await client.createOrReplace({
      ...rest,
      _id: 'cat-implantology'
    })
  }

  // 2. Patch all products referencing the draft ID
  console.log('Fetching products with broken references...')
  const products = await client.fetch('*[_type == "product" && category._ref == "drafts.cat-implantology"] { _id }')
  console.log(`Found ${products.length} products to patch.`)

  let count = 0
  for (const p of products) {
    await client.patch(p._id)
      .set({
        category: {
          _type: 'reference',
          _ref: 'cat-implantology'
        }
      })
      .commit()
    count++
    if (count % 50 === 0) console.log(`Patched ${count} products...`)
  }

  // 3. Delete the draft now that references are cleared
  if (draftCat) {
    console.log('Deleting draft category...')
    await client.delete('drafts.cat-implantology')
    console.log('Draft removed.')
  }

  console.log('All 390 products fixed!')
}

fixImplantology().catch(console.error)
