import { FieldType } from '@airtable/blocks/models'
import Generator from './generator'

const DateGenerator = (): Generator => ({
  id: 'date',
  name: 'Date',
  types: [FieldType.DATE],
  generate: () =>
    new Date(new Date().getTime() + Math.random() * 100 * 1000 * 60 * 60 * 24)
      .toISOString()
      .split('T')[0],
})

export default DateGenerator
