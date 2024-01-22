import { FieldType } from '@airtable/blocks/models'
import Generator from './generator'

const ZipStringGenerator = (): Generator => ({
  id: 'zip-string',
  name: 'Zip code',
  types: [FieldType.SINGLE_LINE_TEXT],
  generate: () => (Math.floor(Math.random() * 90000) + 10000).toString(),
})

export default ZipStringGenerator
