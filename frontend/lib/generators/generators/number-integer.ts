import { FieldType } from '@airtable/blocks/models'
import Generator from './generator'

const NumberIntegerGenerator = ({ integerNumber }): Generator => ({
  id: 'numberInteger',
  name: 'Random integer',
  types: [FieldType.NUMBER],
  generate: () => integerNumber,
})

export default NumberIntegerGenerator
