import { FieldType } from '@airtable/blocks/models'
import Generator from './generator'

const HumanFullNameGenerator = ({ firstName, lastName }): Generator => ({
  id: 'humanNameFull',
  name: 'Human name - full',
  types: [FieldType.SINGLE_LINE_TEXT],
  generate: () => `${firstName} ${lastName}`,
})

export default HumanFullNameGenerator
