import person from './person'
import lorem from './lorem'
import phone from './phone'
import internet from './internet'
import location from './location'
import checkbox from './checkbox'
import date from './date'
import number from './number'
import link from './link'
import select from './select'
import attachment from './attachment'
import duration from './duration'
import percent from './percent'
import rating from './rating'

/**
 * A selection of all available generators.
 */
const generators: RandomGenerator[] = [
  ...person,
  ...lorem,
  ...phone,
  ...internet,
  ...location,
  ...checkbox,
  ...date,
  ...number,
  ...link,
  ...select,
  ...attachment,
  ...duration,
  ...percent,
  ...rating,
].sort((a, b) => a.name.localeCompare(b.name))

export default generators
