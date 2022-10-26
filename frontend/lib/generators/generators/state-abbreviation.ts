import { FieldType } from '@airtable/blocks/models'
import Generator from './generator'
import states from 'states-us'
import { uniqueNamesGenerator } from 'unique-names-generator'

const StateAbbreviationGenerator = (): Generator => ({
  id: 'stateAbbreviation',
  name: 'State abbreviation',
  types: [FieldType.SINGLE_LINE_TEXT],
  generate: () =>
    uniqueNamesGenerator({
      dictionaries: [states.map((state) => state.abbreviation)],
    }),
})

export default StateAbbreviationGenerator
