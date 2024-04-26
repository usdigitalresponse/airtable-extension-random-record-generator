import React from 'react'
import { Icon, colorUtils } from '@airtable/blocks/ui'
import { faker } from '@faker-js/faker'
import { FieldType } from '@airtable/blocks/models'

const rating: RandomGenerator = {
  id: 'rating',
  name: 'Rating',
  types: [FieldType.RATING],
  generate: ({ field }) => {
    return faker.number.int({ min: 0, max: field.options.max })
  },
  preview: ({ field }) => {
    console.log(
      Array.from({
        length: faker.number.int({ min: 0, max: field.options.max }),
      })
    )
    return (
      <>
        {Array.from({
          length: faker.number.int({ min: 1, max: field.options.max }),
        }).map((_, index) => (
          <Icon
            name={field.options.icon}
            marginLeft={2}
            key={index}
            fillColor={colorUtils.getHexForColor(field.options.color)}
          />
        ))}
      </>
    )
  },
}

export default [rating]
