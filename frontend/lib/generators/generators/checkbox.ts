import { FieldType } from '@airtable/blocks/models'
import Generator from './generator'

const CheckboxGenerator = ({ boolean }): Generator => ({
  id: 'checkbox',
  name: 'Randomly checks checkbox',
  types: [FieldType.CHECKBOX],
  generate: () => boolean,
})

export default CheckboxGenerator
