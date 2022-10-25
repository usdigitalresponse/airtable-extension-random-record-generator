import * as React from 'react'
import { ChoiceToken } from '@airtable/blocks/ui'
import { FieldType } from '@airtable/blocks/models'
import Generator from './generator'

const SelectMultipleGenerator = (): Generator => ({
  id: 'selectMultiple',
  name: 'Multiple values',
  types: [FieldType.MULTIPLE_SELECTS],
  generate: (preview, field) => {
    const choices = field.options.choices.filter(() => Math.random() > 0.5)
    if (!choices.length) {
      choices.push(field.options.choices[0])
    }
    if (preview) {
      return (
        <>
          {choices.map((choice) => (
            <ChoiceToken key={choice.id} choice={choice} />
          ))}
        </>
      )
    }
    return choices
  },
})

export default SelectMultipleGenerator
