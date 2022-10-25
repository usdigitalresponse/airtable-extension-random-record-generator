import { FieldType } from '@airtable/blocks/models'
import { uniqueNamesGenerator, names } from 'unique-names-generator'
import Generator from './generator'

const AddressGenerator = ({ float }): Generator => ({
  id: 'address',
  name: 'Address',
  types: [FieldType.SINGLE_LINE_TEXT],
  generate: () =>
    `${Math.floor(float * 100)} ${uniqueNamesGenerator({
      style: 'capital',
      dictionaries: [names],
    })} ${['St', 'Ave', 'Blvd', 'Rd'][Math.floor(Math.random() * 4)]}.`,
})

export default AddressGenerator
