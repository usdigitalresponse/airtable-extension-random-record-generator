import { FieldType } from '@airtable/blocks/models'
import Generator from './generator'

const AnimalLastNameGenerator = ({ animal }): Generator => ({
  id: 'animalNameLast',
  name: 'Animal name - last',
  types: [FieldType.SINGLE_LINE_TEXT],
  generate: () => animal,
})

export default AnimalLastNameGenerator
