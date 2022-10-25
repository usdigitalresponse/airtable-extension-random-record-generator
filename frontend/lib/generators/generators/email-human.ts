import { FieldType } from '@airtable/blocks/models'
import Generator from './generator'

const EmailHumanlGenerator = ({ firstName, lastName }): Generator => ({
  id: 'emailHuman',
  name: 'Human name email address',
  types: [FieldType.EMAIL],
  generate: () =>
    `${firstName
      .toLowerCase()
      .substring(0, 1)}${lastName.toLowerCase()}@gmail.fake-email.com`,
})

export default EmailHumanlGenerator
