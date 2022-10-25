import { FieldType } from '@airtable/blocks/models'
import Generator from './generator'

const HumanFirstNameGenerator = ({ firstName }): Generator => ({
  id: 'humanNameFirst',
  name: 'Human name - first',
  types: [FieldType.SINGLE_LINE_TEXT],
  generate: () => firstName,
})

export default HumanFirstNameGenerator
