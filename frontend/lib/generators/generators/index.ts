import AnimalFirstNameGenerator from './animal-first-name'
import AnimalLastNameGenerator from './animal-last-name'
import AnimalFullNameGenerator from './animal-full-name'
import HumanFirstNameGenerator from './human-first-name'
import HumanLastNameGenerator from './human-last-name'
import HumanFullNameGenerator from './human-full-name'
import LoremIpsumShortGenerator from './lorem-ipsum-short'
import LoremIpsumLongGenerator from './lorem-ipsum-long'
import EmailAnimalGenerator from './email-animal'
import EmailHumanGenerator from './email-human'
import AddressGenerator from './address'
import CityGenerator from './city'
import ZipGenerator from './zip'
import ZipStringGenerator from './zip-string'
import StateAbbreviationGenerator from './state-abbreviation'
import StateNameGenerator from './state-name'
import CheckboxGenerator from './checkbox'
import NumberIntegerGenerator from './number-integer'
import NumberFloatGenerator from './number-float'
import DateGenerator from './date'
import DateTimeGenerator from './date-time'
import AttachmentPhotoCatGenerator from './attachment-photo-cat'
import AttachmentPdfGenerator from './attachment-pdf'
import SelectSingleGenerator from './select-single'
import SelectMultipleGenerator from './select-multiple'
import PhoneGenerator from './phone'
import LinkSingleGenerator from './link-single'
import LinkMultipleGenerator from './link-multiple'

const generators = [
  AnimalFirstNameGenerator,
  AnimalLastNameGenerator,
  AnimalFullNameGenerator,
  HumanFirstNameGenerator,
  HumanLastNameGenerator,
  HumanFullNameGenerator,
  LoremIpsumShortGenerator,
  LoremIpsumLongGenerator,
  EmailAnimalGenerator,
  EmailHumanGenerator,
  AddressGenerator,
  CityGenerator,
  ZipGenerator,
  ZipStringGenerator,
  StateAbbreviationGenerator,
  StateNameGenerator,
  CheckboxGenerator,
  NumberIntegerGenerator,
  NumberFloatGenerator,
  DateGenerator,
  DateTimeGenerator,
  AttachmentPhotoCatGenerator,
  AttachmentPdfGenerator,
  SelectSingleGenerator,
  SelectMultipleGenerator,
  PhoneGenerator,
  LinkSingleGenerator,
  LinkMultipleGenerator,
]

export default (prefill) => generators.map((generator) => generator(prefill))
