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
  'prevest': 'Prevest_Denpro_Catalogue.pdf',
  'ires': 'Ires_Catalogue.pdf',
  'precident': 'Precident_Product Catalogue.pdf',
  'durable': 'Durable_Product_Catalogue.pdf',
  'ramo': 'Ramo_Endodontic Catalogue.pdf',
  'topzir': 'Topzir_Products_Catalogue_2026.pdf',
  'sincere': 'Sincere-instruments_Catalogue.pdf',
  'truedent': 'True-Dent_Catalogue.pdf',
  'pyrax': 'Pyrax_Catalouge.pdf',
  'oradox': 'Oradox_Catalogue.pdf',
  'accumed': 'Accu_Med_Maxilo_Catalogue.pdf'
}

async function uploadAndLink() {
  console.log('Linking all catalog PDFs to manufacturers...')
  
  for (const [slug, fileName] of Object.entries(catalogMap)) {
    try {
      const filePath = path.join('./public/catalogues', fileName)
      if (!fs.existsSync(filePath)) {
        console.warn(`File not found: ${filePath}`)
        continue
      }

      // Find manufacturer ID
      const docs = await client.fetch(`*[_type == "manufacturer" && slug.current == $slug] { _id }`, { slug })
      if (docs.length === 0) {
        console.warn(`Manufacturer not found in Sanity: ${slug}`)
        continue
      }

      const mfrId = docs[0]._id
      console.log(`Uploading ${fileName} for ${slug}...`)
      
      const asset = await client.assets.upload('file', fs.readFileSync(filePath), {
        filename: fileName
      })

      await client.patch(mfrId)
        .set({
          pdf: {
            _type: 'file',
            asset: { _type: 'reference', _ref: asset._id }
          }
        })
        .commit()
      
      console.log(`Successfully linked ${fileName} to ${slug}`)
    } catch (err) {
      console.error(`Error processing ${slug}:`, err.message)
    }
  }
  
  console.log('All catalogs processed!')
}

uploadAndLink().catch(console.error)
