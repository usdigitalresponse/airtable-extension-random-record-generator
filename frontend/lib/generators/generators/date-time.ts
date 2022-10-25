import { FieldType } from '@airtable/blocks/models'
import Generator from './generator'

const DateTimeGenerator = (): Generator => ({
  id: 'dateTime',
  name: 'Date & time',
  types: [FieldType.DATE_TIME],
  generate: () =>
    new Date(new Date().getTime() + Math.random() * 100 * 1000 * 60 * 60 * 24)
      .toISOString()
      .split('T')[0],
})

export default DateTimeGenerator
