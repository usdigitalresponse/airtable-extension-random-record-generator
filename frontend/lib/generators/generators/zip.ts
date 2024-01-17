import { FieldType } from '@airtable/blocks/models'
import Generator from './generator'

const ZipGenerator = (): Generator => ({
  id: 'zip',
  name: 'Zip code',
  types: [FieldType.NUMBER],
  generate: () => Math.floor(Math.random() * 90000) + 10000,
})

export default ZipGenerator
