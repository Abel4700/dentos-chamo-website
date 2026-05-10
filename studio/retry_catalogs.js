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

const catalogMap = {
  'ires': 'Ires_Catalogue.pdf',
  'ramo': 'Ramo_Endodontic Catalogue.pdf'
}

async function retryFailed() {
  console.log('Retrying failed catalog uploads (ires, ramo)...')
  
  for (const [slug, fileName] of Object.entries(catalogMap)) {
    try {
      const filePath = path.join('./public/catalogues', fileName)
      const docs = await client.fetch(`*[_type == "manufacturer" && slug.current == $slug] { _id }`, { slug })
      const mfrId = docs[0]._id
      
      console.log(`Uploading ${fileName} for ${slug}...`)
      const asset = await client.assets.upload('file', fs.readFileSync(filePath), {
        filename: fileName
      })

      await client.patch(mfrId).set({
        pdf: {
          _type: 'file',
          asset: { _type: 'reference', _ref: asset._id }
        }
      }).commit()
      
      console.log(`Successfully linked ${fileName} to ${slug}`)
    } catch (err) {
      console.error(`Error retrying ${slug}:`, err.message)
    }
  }
}

retryFailed().catch(console.error)
