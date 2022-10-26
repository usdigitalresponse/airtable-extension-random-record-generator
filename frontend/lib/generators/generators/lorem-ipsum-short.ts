import { FieldType } from '@airtable/blocks/models'
import Generator from './generator'

const LoremIpsumShortGenerator = ({ lorem }): Generator => ({
  id: 'loremIpsumShort',
  name: 'Lorem ipsum - sentence',
  types: [FieldType.SINGLE_LINE_TEXT, FieldType.MULTILINE_TEXT],
  generate: () => lorem.generateSentences(1),
})

export default LoremIpsumShortGenerator
