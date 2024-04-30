import { faker } from '@faker-js/faker'
import fieldTypeGroups from '../field-type-groups'
import { FieldType } from '@airtable/blocks/models'

const phone: RandomGenerator = {
  id: 'phone',
  name: 'Phone number',
  types: [...fieldTypeGroups.text, FieldType.PHONE_NUMBER],
  generate: () => faker.phone.number(),
}

const phoneImei: RandomGenerator = {
  id: 'phoneImei',
  name: 'IMEI Phone number',
  types: [...fieldTypeGroups.text, FieldType.PHONE_NUMBER],
  generate: () => faker.phone.imei(),
}

export default [phone, phoneImei]
