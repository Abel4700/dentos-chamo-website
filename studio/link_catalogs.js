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

async function updateCatalog(mfrId, filePath) {
  try {
    console.log(`Uploading catalog for ${mfrId}: ${filePath}...`)
    const absolutePath = path.join(process.cwd(), filePath)
    if (!fs.existsSync(absolutePath)) {
      throw new Error(`File not found: ${absolutePath}`)
    }
    
    const asset = await client.assets.upload('file', fs.readFileSync(absolutePath), {
      filename: path.basename(absolutePath)
    })
    
    await client.patch(mfrId)
      .set({
        pdf: {
          _type: 'file',
          asset: { _type: 'reference', _ref: asset._id }
        }
      })
      .commit()
      
    console.log(`Success: Linked ${path.basename(filePath)} to ${mfrId}`)
  } catch (err) {
    console.error(`Error updating ${mfrId}:`, err.message)
  }
}

async function main() {
  await updateCatalog('mfr-sincere', './public/catalogues/Sincere-instruments_Catalogue.pdf')
  await updateCatalog('mfr-truedent', './public/catalogues/True-Dent_Catalogue.pdf')
}

main()
