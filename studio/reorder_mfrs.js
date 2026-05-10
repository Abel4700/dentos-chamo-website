import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'ousbvhh0',
  dataset: 'production',
  useCdn: false,
  token: 'sksZEnydMgSiD1XMQWlgo2wsVwNq7ph2TBCLvLBd05iW1zCuP77lXks7kDVeeVm1C1U3SKMTGjHxO88PKpF9HFjHYoP9iBy1okMxpqrLwFXDz3Aso80tDc7MSvcCIr9HLWHG4NfxPHLuNFFZHt3aGC7mfkJ5pgMoGZpoIb2uY9RNZpskwdoc',
  apiVersion: '2024-05-01'
})

const sequence = [
  'prevest',
  'ires',
  'precident',
  'durable',
  'ramo',
  'topzir',
  'sincere',
  'truedent',
  'pyrax',
  'oradox'
]

async function reorder() {
  console.log('Setting manufacturer display orders...')
  
  for (let i = 0; i < sequence.length; i++) {
    const slug = sequence[i]
    const order = i + 1
    
    try {
      const docs = await client.fetch(`*[_type == "manufacturer" && slug.current == $slug] { _id }`, { slug })
      if (docs.length > 0) {
        for (const doc of docs) {
          await client.patch(doc._id).set({ displayOrder: order }).commit()
          console.log(`Set ${slug} to order ${order}`)
        }
      } else {
        console.warn(`Manufacturer not found: ${slug}`)
      }
    } catch (err) {
      console.error(`Error updating ${slug}:`, err.message)
    }
  }
  
  console.log('Reordering complete!')
}

reorder()
