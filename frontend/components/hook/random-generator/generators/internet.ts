import { faker } from '@faker-js/faker'
import fieldTypeGroups from '../field-type-groups'
import { FieldType } from '@airtable/blocks/models'

const userName: RandomGenerator = {
  id: 'userName',
  name: 'Username',
  types: [...fieldTypeGroups.text],
  generate: () => faker.internet.userName(),
}

const email: RandomGenerator = {
  id: 'email',
  name: 'Email address',
  types: [...fieldTypeGroups.text, FieldType.EMAIL],
  generate: () => faker.internet.email(),
}

const emoji: RandomGenerator = {
  id: 'emoji',
  name: 'Emoji',
  types: fieldTypeGroups.text,
  generate: () => faker.internet.emoji(),
}

const ipAddress: RandomGenerator = {
  id: 'ipAddress',
  name: 'IP Address',
  types: fieldTypeGroups.text,
  generate: () => faker.internet.ip(),
}

const url: RandomGenerator = {
  id: 'url',
  name: 'URL',
  types: [...fieldTypeGroups.text, FieldType.URL],
  generate: () => faker.internet.url(),
}

export default [userName, email, emoji, ipAddress, url]
