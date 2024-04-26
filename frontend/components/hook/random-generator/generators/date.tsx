import React from 'react'
import { Box, FormField, Select } from '@airtable/blocks/ui'
import { faker } from '@faker-js/faker'
import { Field, FieldType } from '@airtable/blocks/models'

const DATE_TYPES = [
  { value: 'anytime', label: 'Anytime' },
  { value: 'past', label: 'Past' },
  { value: 'future', label: 'Future' },
  { value: 'recent', label: 'Recent' },
  { value: 'soon', label: 'Soon' },
]

interface GenerateDate {
  type: string
  field: Field
  format: boolean
}

/**
 * Generates a random date or datetime
 */
const generateDate = ({ type, field, format }: GenerateDate) => {
  const date = faker.date[type]()
  if (format) {
    if (field.type === FieldType.DATE) {
      return date.toLocaleDateString()
    }
    return date.toLocaleString()
  }
  if (field.type === FieldType.DATE) {
    return date.toISOString().split('T')[0]
  }
  return date.toISOString()
}

const date: RandomGenerator = {
  id: 'date',
  name: 'Date',
  types: [FieldType.DATE, FieldType.DATE_TIME],
  generate: ({ options, field }) =>
    generateDate({ type: options.type, field, format: false }),
  preview: ({ options, field }) =>
    generateDate({ type: options.type, field, format: true }),
  defaultOptions: { type: 'anytime' },
  optionsForm: ({ options, setOptions }) => (
    <Box>
      <FormField label="Date type" marginBottom={0}>
        <Select
          options={DATE_TYPES}
          value={options.type}
          onChange={(newType) => setOptions({ type: newType })}
        />
      </FormField>
    </Box>
  ),
}

export default [date]
