import { FieldType } from '@airtable/blocks/models'
import { uniqueNamesGenerator } from 'unique-names-generator'
import Generator from './generator'
import cities from '../../../data/cities.js'

const CityGenerator = (): Generator => ({
  id: 'city',
  name: 'City',
  types: [FieldType.SINGLE_LINE_TEXT],
  generate: () =>
    uniqueNamesGenerator({
      dictionaries: [cities],
    }),
})

export default CityGenerator
