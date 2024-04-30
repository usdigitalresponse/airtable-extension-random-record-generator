import React from 'react'
import { ChoiceToken } from '@airtable/blocks/ui'
import { FieldType } from '@airtable/blocks/models'

const singleSelect: RandomGenerator = {
  id: 'singleSelect',
  name: 'Single select',
  types: [FieldType.SINGLE_SELECT],
  generate: ({ field }) =>
    field.options.choices[
      Math.floor(Math.random() * field.options.choices.length)
    ],
  preview: ({ field }) => {
    const choice =
      field.options.choices[
        Math.floor(Math.random() * field.options.choices.length)
      ]
    return <ChoiceToken choice={choice} />
  },
}

const multipleSelect: RandomGenerator = {
  id: 'multipleSelect',
  name: 'Multiple select',
  types: [FieldType.MULTIPLE_SELECTS],
  generate: ({ field }) =>
    field.options.choices
      .map((choice) => Math.random() > 0.5 && choice)
      .filter((choice) => choice),
  preview: ({ field }) => {
    const choices = field.options.choices
      .map((choice) => Math.random() > 0.5 && choice)
      .filter((choice) => choice)
    return (
      <>
        {choices.map((choice) => (
          <ChoiceToken key={choice.id} choice={choice} marginRight={2} />
        ))}
      </>
    )
  },
}

export default [singleSelect, multipleSelect]
