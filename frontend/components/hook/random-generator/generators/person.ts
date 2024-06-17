import { faker } from '@faker-js/faker'
import { animals } from 'unique-names-generator'
import fieldTypeGroups from '../field-type-groups'
import firstLetterContext from '../first-letter-context'

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

const firstNameAnimal: RandomGenerator = {
  id: 'firstNameAnimal',
  name: 'First name (animal)',
  types: fieldTypeGroups.text,
  generate: () => {
    let value = faker.person.firstName()
    while (value.charAt(0).toLowerCase() !== firstLetterContext.get()) {
      value = faker.person.firstName()
    }
    return value
  },
}

const lastNameAnimal: RandomGenerator = {
  id: 'lastNameAnimal',
  name: 'Last name (animal)',
  types: fieldTypeGroups.text,
  generate: () => {
    const lastName = animals
      .sort(() => Math.random() - 0.5)
      .find((name) => name.charAt(0).toLowerCase() === firstLetterContext.get())
    return lastName.charAt(0).toUpperCase() + lastName.slice(1)
  },
}

const fullNameAnimal: RandomGenerator = {
  id: 'fullNameAnimal',
  name: 'Full name (animal)',
  types: fieldTypeGroups.text,
  generate: () => {
    let firstName = faker.person.firstName()
    while (firstName.charAt(0).toLowerCase() !== firstLetterContext.get()) {
      firstName = faker.person.firstName()
    }
    const lastName = animals
      .sort(() => Math.random() - 0.5)
      .find((name) => name.charAt(0).toLowerCase() === firstLetterContext.get())
    return `${firstName} ${
      lastName.charAt(0).toUpperCase() + lastName.slice(1)
    }`
  },
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
  firstNameAnimal,
  lastNameAnimal,
  fullNameAnimal,
]
