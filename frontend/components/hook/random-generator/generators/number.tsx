import React from 'react'
import { Box, FormField, Input } from '@airtable/blocks/ui'
import { faker } from '@faker-js/faker'
import { FieldType } from '@airtable/blocks/models'

const number: RandomGenerator = {
  id: 'number',
  name: 'Number',
  types: [FieldType.NUMBER],
  generate: ({ options, field }) => {
    if (field.options.precision === 0) {
      return faker.number.int(options)
    }
    return faker.number.float(options)
  },
  defaultOptions: { min: 0, max: 100 },
  optionsForm: ({ options, setOptions }) => (
    <Box display="flex">
      <FormField label="Minimum" marginBottom={0} marginRight={2}>
        <Input
          type="number"
          value={options.min.toString()}
          onChange={(event) =>
            setOptions({ ...options, min: parseInt(event.target.value, 10) })
          }
        />
      </FormField>
      <FormField label="Maximum" marginBottom={0}>
        <Input
          type="number"
          value={options.max.toString()}
          onChange={(event) =>
            setOptions({ ...options, max: parseInt(event.target.value, 10) })
          }
        />
      </FormField>
    </Box>
  ),
}

const currency: RandomGenerator = {
  id: 'currency',
  name: 'Currency',
  types: [FieldType.CURRENCY],
  preview: ({ field }) =>
    faker.finance.amount({ symbol: field.options.symbol }),
  generate: () => parseFloat(faker.finance.amount()),
}

export default [number, currency]
