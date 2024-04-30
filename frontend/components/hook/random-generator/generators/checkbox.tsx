import React from 'react'
import { Box, Icon } from '@airtable/blocks/ui'
import { faker } from '@faker-js/faker'
import { FieldType } from '@airtable/blocks/models'

const checkbox: RandomGenerator = {
  id: 'checkbox',
  name: 'Checkbox',
  description: 'Randomly checks checkbox',
  types: [FieldType.CHECKBOX],
  generate: () => faker.datatype.boolean(),
  preview: () => (
    <Box>
      <Icon
        name={
          faker.datatype.boolean() ? 'checkboxChecked' : 'checkboxUnchecked'
        }
        size={16}
      />
    </Box>
  ),
}

export default [checkbox]
