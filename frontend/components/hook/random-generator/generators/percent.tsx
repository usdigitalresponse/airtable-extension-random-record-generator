import { faker } from '@faker-js/faker'
import { FieldType } from '@airtable/blocks/models'

const percent: RandomGenerator = {
  id: 'percent',
  name: 'Percent',
  types: [FieldType.PERCENT],
  generate: () => {
    return faker.number.float({ min: 0, max: 1 })
  },
  preview: () => `${faker.number.int({ min: 0, max: 99 })}%`,
}

export default [percent]
