import { FieldType } from '@airtable/blocks/models'
import Generator from './generator'

const AnimalFirstNameGenerator = ({ firstName }): Generator => ({
  id: 'animalNameFirst',
  name: 'Animal name - first',
  types: [FieldType.SINGLE_LINE_TEXT],
  generate: () => firstName,
})

export default AnimalFirstNameGenerator
