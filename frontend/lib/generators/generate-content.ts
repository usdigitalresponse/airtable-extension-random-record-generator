import { uniqueNamesGenerator, animals, names } from 'unique-names-generator'
import { LoremIpsum } from 'lorem-ipsum'
import { Base } from '@airtable/blocks/models'
import generators from './generators'
import Generator from './generators/generator'

interface GenerateOptions {
  generatorId: string
  preview?: boolean
  field?: any
}

interface GenerateContent {
  generators: Generator[]
  generate: (GenerateOptions) => Promise<any>
}

/**
 * Generates random prefilled values. Since many generators
 * depend on each other, this creates a single constant state
 * across generators.
 * @returns
 */
const generatePrefill = () => {
  const float = Math.random() * 100
  const integerNumber = Math.floor(float)
  const boolean = Math.random() > 0.5

  const firstName = uniqueNamesGenerator({
    style: 'capital',
    dictionaries: [names],
  })

  const startLetter = firstName.charAt(0).toLowerCase()

  const lastName = uniqueNamesGenerator({
    style: 'capital',
    dictionaries: [
      names.filter((name) => name.charAt(0).toLowerCase() === startLetter),
    ],
  })

  const animal = uniqueNamesGenerator({
    style: 'capital',
    dictionaries: [
      animals.filter((name) => name.charAt(0).toLowerCase() === startLetter),
    ],
  })

  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  })
  return { float, integerNumber, boolean, firstName, lastName, animal, lorem }
}

const generateContent = (base: Base): GenerateContent => {
  const prefill = generatePrefill()

  const allGenerators = generators({ ...prefill, base })

  const generate = async ({
    generatorId,
    preview = false,
    field,
  }: GenerateOptions) => {
    const generator = allGenerators.find(
      (generator) => generator.id === generatorId
    )
    if (generator && generator.generate) {
      return await generator.generate(preview, field)
    }
    return Promise.resolve(null)
  }

  return {
    generators: allGenerators,
    generate,
  }
}

export default generateContent
