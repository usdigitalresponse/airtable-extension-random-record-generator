import { ChoiceToken } from '@airtable/blocks/ui'
import { uniqueNamesGenerator, animals, names } from 'unique-names-generator'
import { LoremIpsum } from 'lorem-ipsum'
import { FieldType } from '@airtable/blocks/models'
import randomMobile from 'random-mobile'
import states from 'states-us'
import React from 'react'
import cities from './data/cities'

/**
 *
 * TODO
 * - Lat
 * - Long
 * - Reference to other table
 */

interface GeneratorItem {
  id: string
  name: string
  types: Array<FieldType>
  generate: Function
}

interface Generators extends Array<GeneratorItem> {}

const generateContent = (): { generators: Generators; generate: Function } => {
  const float: number = Math.random() * 100
  const integerNumber: number = Math.floor(float)
  const boolean: boolean = Math.random() > 0.5

  const firstName: string = uniqueNamesGenerator({
    style: 'capital',
    dictionaries: [names],
  })

  const startLetter: string = firstName.charAt(0).toLowerCase()

  const lastName: string = uniqueNamesGenerator({
    style: 'capital',
    dictionaries: [
      names.filter((name) => name.charAt(0).toLowerCase() === startLetter),
    ],
  })

  const animal: string = uniqueNamesGenerator({
    style: 'capital',
    dictionaries: [
      animals.filter((name) => name.charAt(0).toLowerCase() === startLetter),
    ],
  })

  const lorem: LoremIpsum = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  })

  const generators: Generators = [
    {
      id: 'animalNameFirst',
      name: 'Animal name - first',
      types: [FieldType.SINGLE_LINE_TEXT],
      generate: () => firstName,
    },
    {
      id: 'animalNameLast',
      name: 'Animal name - last',
      types: [FieldType.SINGLE_LINE_TEXT],
      generate: () => animal,
    },
    {
      id: 'animalNameFull',
      name: 'Animal name - full',
      types: [FieldType.SINGLE_LINE_TEXT],
      generate: () => `${firstName} ${animal}`,
    },
    {
      id: 'humanNameFirst',
      name: 'Human name - first',
      types: [FieldType.SINGLE_LINE_TEXT],
      generate: () => firstName,
    },
    {
      id: 'humanNameLast',
      name: 'Human name - last',
      types: [FieldType.SINGLE_LINE_TEXT],
      generate: () => lastName,
    },
    {
      id: 'humanNameFull',
      name: 'Human name - full',
      types: [FieldType.SINGLE_LINE_TEXT],
      generate: () => `${firstName} ${lastName}`,
    },
    {
      id: 'loremIpsumShort',
      name: 'Lorem ipsum - sentence',
      types: [FieldType.SINGLE_LINE_TEXT, FieldType.MULTILINE_TEXT],
      generate: () => lorem.generateSentences(1),
    },
    {
      id: 'loremIpsumLong',
      name: 'Lorem ipsum - paragraphs',
      types: [FieldType.MULTILINE_TEXT],
      generate: (preview) =>
        preview ? `${lorem.generateWords(5)}...` : lorem.generateParagraphs(3),
    },
    {
      id: 'emailAnimal',
      name: 'Animal name email address',
      types: [FieldType.EMAIL],
      generate: () =>
        `${firstName
          .toLowerCase()
          .substring(0, 1)}${animal.toLowerCase()}@gmail.fake-email.com`,
    },
    {
      id: 'emailHuman',
      name: 'Human name email address',
      types: [FieldType.EMAIL],
      generate: () =>
        `${firstName
          .toLowerCase()
          .substring(0, 1)}${lastName.toLowerCase()}@gmail.fake-email.com`,
    },
    {
      id: 'address',
      name: 'Address',
      types: [FieldType.SINGLE_LINE_TEXT],
      generate: () =>
        `${Math.floor(float * 100)} ${uniqueNamesGenerator({
          style: 'capital',
          dictionaries: [names],
        })} ${['St', 'Ave', 'Blvd', 'Rd'][Math.floor(Math.random() * 4)]}.`,
    },
    {
      id: 'city',
      name: 'City',
      types: [FieldType.SINGLE_LINE_TEXT],
      generate: () =>
        uniqueNamesGenerator({
          dictionaries: [cities],
        }),
    },
    {
      id: 'zip',
      name: 'Zip code',
      types: [FieldType.SINGLE_LINE_TEXT, FieldType.NUMBER],
      generate: () => Math.floor(Math.random() * 90000) + 10000,
    },

    {
      id: 'stateAbbreviation',
      name: 'State abbreviation',
      types: [FieldType.SINGLE_LINE_TEXT],
      generate: () =>
        uniqueNamesGenerator({
          dictionaries: [states.map((state) => state.abbreviation)],
        }),
    },
    {
      id: 'stateName',
      name: 'State name',
      types: [FieldType.SINGLE_LINE_TEXT],
      generate: () =>
        uniqueNamesGenerator({
          dictionaries: [states.map((state) => state.name)],
        }),
    },
    {
      id: 'checkbox',
      name: 'Randomly checks checkbox',
      types: [FieldType.CHECKBOX],
      generate: () => boolean,
    },
    {
      id: 'numberInteger',
      name: 'Random integer',
      types: [FieldType.NUMBER],
      generate: () => integerNumber,
    },
    {
      id: 'numberFloat',
      name: 'Random decimal',
      types: [FieldType.CURRENCY, FieldType.NUMBER],
      generate: () => float,
    },
    {
      id: 'date',
      name: 'Date',
      types: [FieldType.DATE],
      generate: () =>
        new Date(
          new Date().getTime() + Math.random() * 100 * 1000 * 60 * 60 * 24
        )
          .toISOString()
          .split('T')[0],
    },
    {
      id: 'dateTime',
      name: 'Date & time',
      types: [FieldType.DATE_TIME],
      generate: () =>
        new Date(
          new Date().getTime() + Math.random() * 100 * 1000 * 60 * 60 * 24
        )
          .toISOString()
          .split('T')[0],
    },
    {
      id: 'attachmentsCat',
      name: 'Cat photos',
      types: [FieldType.MULTIPLE_ATTACHMENTS],
      generate: (preview) =>
        preview
          ? (() => (
              <img
                src={`https://cataas.com/cat`}
                alt=""
                style={{ width: '40px' }}
              />
            ))()
          : [{ url: `https://cataas.com/cat?_=${Math.random()}` }],
    },
    {
      id: 'attachmentsPdf',
      name: 'PDF files',
      types: [FieldType.MULTIPLE_ATTACHMENTS],
      generate: (preview) =>
        preview
          ? '📑'
          : [
              {
                url: `https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf`,
              },
            ],
    },
    {
      id: 'selectSingle',
      name: 'Single value',
      types: [FieldType.SINGLE_SELECT],
      generate: (preview, field) => {
        const choice =
          field.options.choices[
            Math.floor(Math.random() * field.options.choices.length)
          ]
        if (preview) {
          return <ChoiceToken choice={choice} />
        }
        return choice
      },
    },
    {
      id: 'selectMultiple',
      name: 'Multiple values',
      types: [FieldType.MULTIPLE_SELECTS],
      generate: (preview, field) => {
        const choices = field.options.choices.filter(() => Math.random() > 0.5)
        if (!choices.length) {
          choices.push(field.options.choices[0])
        }
        if (preview) {
          return (
            <>
              {choices.map((choice) => (
                <ChoiceToken key={choice.id} choice={choice} />
              ))}
            </>
          )
        }
        return choices
      },
    },
    {
      id: 'phone',
      name: 'Phone number',
      types: [FieldType.PHONE_NUMBER],
      generate: (preview) => randomMobile({ formatted: preview }),
    },
  ]

  const generate = ({ generatorId, preview = false, field }): string | null => {
    const generator = generators.find(
      (generator) => generator.id === generatorId
    )
    if (generator && generator.generate) {
      return generator.generate(preview, field)
    }
    return null
  }

  return {
    generators,
    generate,
  }
}

export default generateContent
