import { faker } from '@faker-js/faker'
import fieldTypeGroups from '../field-type-groups'

const firstName: RandomGenerator = {
  id: 'firstName',
  name: 'First name',
  types: fieldTypeGroups.text,
  generate: () => faker.person.firstName(),
}

const lastName: RandomGenerator = {
  id: 'lastName',
  name: 'Last name',
  types: fieldTypeGroups.text,
  generate: () => faker.person.lastName(),
}

const fullName: RandomGenerator = {
  id: 'fullName',
  name: 'Full name',
  types: fieldTypeGroups.text,
  generate: () => faker.person.fullName(),
}

const sex: RandomGenerator = {
  id: 'sex',
  name: 'Sex',
  description:
    'A binary sex category, based on biological and physiological characteristics.',
  types: fieldTypeGroups.text,
  generate: () => faker.person.sex(),
}

const gender: RandomGenerator = {
  id: 'gender',
  name: 'Gender',
  description: "A person's gender identity. This is a non-binary definition.",
  types: fieldTypeGroups.text,
  generate: () => faker.person.gender(),
}

const jobTitle: RandomGenerator = {
  id: 'jobTitle',
  name: 'Job title',
  types: fieldTypeGroups.text,
  generate: () => faker.person.jobTitle(),
}

const jobType: RandomGenerator = {
  id: 'jobType',
  name: 'Job type',
  types: fieldTypeGroups.text,
  generate: () => faker.person.jobType(),
}

const bio: RandomGenerator = {
  id: 'bio',
  name: 'Biography',
  types: fieldTypeGroups.text,
  generate: () => faker.person.bio(),
}

export default [
  firstName,
  lastName,
  fullName,
  sex,
  gender,
  jobTitle,
  jobType,
  bio,
]
