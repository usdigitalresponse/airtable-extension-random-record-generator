import React from 'react'
import { ChoiceToken } from '@airtable/blocks/ui'
import { FieldType } from '@airtable/blocks/models'
import Generator from './generator'

const SelectSingleGenerator = (): Generator => ({
  id: 'selectSingle',
  name: 'Single value',
  types: [FieldType.SINGLE_SELECT],
  generate: (preview, field) => {
    const choice =
      field.options.choices[
        Math.floor(Math.random() * field.options.choices.length)
      ]
    if (preview) {
      return <ChoiceToken choice={choice} />
    }
    return choice
  },
})

export default SelectSingleGenerator
