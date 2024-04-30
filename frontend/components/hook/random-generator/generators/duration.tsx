import { faker } from '@faker-js/faker'
import { FieldType } from '@airtable/blocks/models'

const duration: RandomGenerator = {
  id: 'duration',
  name: 'Duration',
  types: [FieldType.DURATION],
  generate: () => faker.number.int({ min: 60, max: 60 * 60 * 24 }),
  preview: () => {
    const duration = faker.number.int({ min: 60, max: 60 * 60 * 24 })
    const hours = Math.floor(duration / 60 / 60)
    const minutes = Math.floor((duration - hours * 60 * 60) / 60)
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}`
  },
}

export default [duration]
