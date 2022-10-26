import { FieldType } from '@airtable/blocks/models'
import Generator from './generator'

const NumberFloatGenerator = ({ float }): Generator => ({
  id: 'numberFloat',
  name: 'Random decimal',
  types: [FieldType.CURRENCY, FieldType.NUMBER],
  generate: () => float,
})

export default NumberFloatGenerator
