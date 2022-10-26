import { FieldType } from '@airtable/blocks/models'
import Generator from './generator'

const LoremIpsumLongGenerator = ({ lorem }): Generator => ({
  id: 'loremIpsumLong',
  name: 'Lorem ipsum - paragraphs',
  types: [FieldType.MULTILINE_TEXT],
  generate: (preview) =>
    preview ? `${lorem.generateWords(5)}...` : lorem.generateParagraphs(3),
})

export default LoremIpsumLongGenerator
