import { FieldType } from '@airtable/blocks/models'
import Generator from './generator'

const HumanLastNameGenerator = ({ lastName }): Generator => ({
  id: 'humanNameLast',
  name: 'Human name - last',
  types: [FieldType.SINGLE_LINE_TEXT],
  generate: () => lastName,
})

export default HumanLastNameGenerator
