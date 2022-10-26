import { FieldType } from '@airtable/blocks/models'
import Generator from './generator'
import states from 'states-us'
import { uniqueNamesGenerator } from 'unique-names-generator'

const StateNameGenerator = (): Generator => ({
  id: 'stateName',
  name: 'State name',
  types: [FieldType.SINGLE_LINE_TEXT],
  generate: () =>
    uniqueNamesGenerator({
      dictionaries: [states.map((state) => state.name)],
    }),
})

export default StateNameGenerator
