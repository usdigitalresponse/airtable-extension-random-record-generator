import { FieldType } from '@airtable/blocks/models'
import randomMobile from 'random-mobile'
import Generator from './generator'

const PhoneGenerator = (): Generator => ({
  id: 'phone',
  name: 'Phone number',
  types: [FieldType.PHONE_NUMBER],
  generate: (preview) => randomMobile({ formatted: preview }),
})

export default PhoneGenerator
