import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'ousbvhh0',
  dataset: 'production',
  useCdn: false,
  token: 'sksZEnydMgSiD1XMQWlgo2wsVwNq7ph2TBCLvLBd05iW1zCuP77lXks7kDVeeVm1C1U3SKMTGjHxO88PKpF9HFjHYoP9iBy1okMxpqrLwFXDz3Aso80tDc7MSvcCIr9HLWHG4NfxPHLuNFFZHt3aGC7mfkJ5pgMoGZpoIb2uY9RNZpskwdoc',
  apiVersion: '2024-05-01'
})

async function fixMissingTypes() {
  console.log('Fixing missing _type in specificationGroups...')

  const products = await client.fetch('*[_type == "product" && count(specificationGroups) > 0]')
  console.log(`Found ${products.length} products to check.`)

  let fixedCount = 0
  for (const p of products) {
    let changed = false
    const newGroups = p.specificationGroups.map(group => {
      let groupChanged = false
      const newGroup = { ...group }
      if (!newGroup._type) {
        newGroup._type = 'object'
        groupChanged = true
      }
      
      if (newGroup.items) {
        newGroup.items = newGroup.items.map(item => {
          if (!item._type) {
            groupChanged = true
            return { ...item, _type: 'object' }
          }
          return item
        })
      }
      
      if (groupChanged) changed = true
      return newGroup
    })

    if (changed) {
      await client.patch(p._id).set({ specificationGroups: newGroups }).commit()
      fixedCount++
      if (fixedCount % 50 === 0) console.log(`Fixed ${fixedCount} products...`)
    }
  }

  console.log(`Done! Fixed _type for ${fixedCount} products.`)
}

fixMissingTypes().catch(console.error)
