import React from 'react'
import { faker } from '@faker-js/faker'
import { Switch } from '@airtable/blocks/ui'
import { FieldType } from '@airtable/blocks/models'
import fieldTypeGroups from '../field-type-groups'

const zipCode: RandomGenerator = {
  id: 'pzipCodehone',
  name: 'Zip code',
  types: [...fieldTypeGroups.text, FieldType.NUMBER],
  generate: ({ field }) =>
    field.type === FieldType.NUMBER
      ? parseInt(faker.location.zipCode(), 10)
      : faker.location.zipCode(),
}

const timeZone: RandomGenerator = {
  id: 'timeZone',
  name: 'Time zone',
  types: fieldTypeGroups.text,
  generate: () => faker.location.timeZone(),
}

const streetName: RandomGenerator = {
  id: 'streetName',
  name: 'Street name',
  types: fieldTypeGroups.text,
  generate: () => faker.location.street(),
}

const streetAddress: RandomGenerator = {
  id: 'streetAddress',
  name: 'Street address',
  types: fieldTypeGroups.text,
  generate: () => faker.location.streetAddress(),
}

const secondaryAddress: RandomGenerator = {
  id: 'secondaryAddress',
  name: 'Secondary address',
  types: fieldTypeGroups.text,
  generate: () => faker.location.secondaryAddress(),
}

const latitude: RandomGenerator = {
  id: 'latitude',
  name: 'Latitude',
  types: [...fieldTypeGroups.text, FieldType.NUMBER],
  generate: () => faker.location.latitude(),
}

const longitude: RandomGenerator = {
  id: 'longitude',
  name: 'Longitude',
  types: [...fieldTypeGroups.text, FieldType.NUMBER],
  generate: () => faker.location.longitude(),
}

const county: RandomGenerator = {
  id: 'county',
  name: 'County',
  types: fieldTypeGroups.text,
  generate: () => faker.location.county(),
}

const country: RandomGenerator = {
  id: 'country',
  name: 'Country',
  types: fieldTypeGroups.text,
  generate: () => faker.location.country(),
}

const countryCode: RandomGenerator = {
  id: 'countryCode',
  name: 'Country code',
  types: fieldTypeGroups.text,
  generate: () => faker.location.countryCode(),
}

const city: RandomGenerator = {
  id: 'city',
  name: 'City',
  types: fieldTypeGroups.text,
  generate: () => faker.location.city(),
}

const state: RandomGenerator = {
  id: 'state',
  name: 'State',
  types: fieldTypeGroups.text,
  generate: ({ options }) => faker.location.state(options),
  defaultOptions: { abbreviated: true },
  optionsForm: ({ options, setOptions }) => (
    <Switch
      value={options.abbreviated}
      onChange={(value) => setOptions({ abbreviated: value })}
      label="Abbreviated"
    />
  ),
}

export default [
  zipCode,
  timeZone,
  streetAddress,
  streetName,
  state,
  secondaryAddress,
  latitude,
  longitude,
  county,
  country,
  countryCode,
  city,
]
