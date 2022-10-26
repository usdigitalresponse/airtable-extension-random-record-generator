import { FieldType } from '@airtable/blocks/models'
import Generator from './generator'

const AnimalFullNameGenerator = ({ firstName, animal }): Generator => ({
  id: 'animalNameFull',
  name: 'Animal name - full',
  types: [FieldType.SINGLE_LINE_TEXT],
  generate: () => `${firstName} ${animal}`,
})

export default AnimalFullNameGenerator
