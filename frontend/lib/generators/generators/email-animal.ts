import { FieldType } from '@airtable/blocks/models'
import Generator from './generator'

const EmailAnimalGenerator = ({ firstName, animal }): Generator => ({
  id: 'emailAnimal',
  name: 'Animal name email address',
  types: [FieldType.EMAIL],
  generate: () =>
    `${firstName
      .toLowerCase()
      .substring(0, 1)}${animal.toLowerCase()}@gmail.fake-email.com`,
})

export default EmailAnimalGenerator
