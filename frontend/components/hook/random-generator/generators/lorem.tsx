import React from 'react'
import { Box, FormField, Input } from '@airtable/blocks/ui'
import { faker } from '@faker-js/faker'
import fieldTypeGroups from '../field-type-groups'

const slug: RandomGenerator = {
  id: 'slug',
  name: 'Slug',
  types: fieldTypeGroups.text,
  generate: ({ options }) => faker.lorem.slug(options?.length || 3),
  defaultOptions: { length: 3 },
  optionsForm: ({ options, setOptions }) => (
    <Box>
      <FormField label="Length" marginBottom={0}>
        <Input
          type="number"
          value={options.length}
          onChange={(event) =>
            setOptions({ length: parseInt(event.target.value, 10) })
          }
        />
      </FormField>
    </Box>
  ),
}

const sentence: RandomGenerator = {
  id: 'sentence',
  name: 'Lorem ipsum sentence',
  types: fieldTypeGroups.text,
  generate: ({ options }) =>
    faker.lorem.sentence(
      options?.wordCount
        ? parseInt(options.wordCount, 10)
        : { min: 10, max: 25 }
    ),
  defaultOptions: { wordCount: 15 },
  optionsForm: ({ options, setOptions }) => (
    <Box>
      <FormField label="Number of words" marginBottom={0}>
        <Input
          type="number"
          value={options.wordCount}
          onChange={(event) =>
            setOptions({ wordCount: parseInt(event.target.value, 10) })
          }
        />
      </FormField>
    </Box>
  ),
}

const paragraph: RandomGenerator = {
  id: 'paragraph',
  name: 'Lorem ipsum paragraph',
  types: fieldTypeGroups.text,
  generate: ({ options }) =>
    faker.lorem.paragraph(
      options?.sentences > 0 ? options.sentences : { min: 1, max: 5 }
    ),
  preview: ({ options }) =>
    faker.lorem
      .paragraph(
        options?.sentences > 0 ? options.sentences : { min: 1, max: 5 }
      )
      .substring(0, 100) + '…',
  defaultOptions: { sentences: 3 },
  optionsForm: ({ options, setOptions }) => (
    <Box>
      <FormField label="Number of sentences" marginBottom={0}>
        <Input
          type="number"
          value={options.sentences}
          onChange={(event) =>
            setOptions({ sentences: parseInt(event.target.value, 10) })
          }
        />
      </FormField>
    </Box>
  ),
}

const paragraphs: RandomGenerator = {
  id: 'paragraphs',
  name: 'Multiple lorem ipsum paragraphs',
  types: fieldTypeGroups.text,
  generate: ({ options }) =>
    faker.lorem.paragraphs(options?.length || { min: 2, max: 5 }),
  preview: ({ options }) =>
    faker.lorem
      .paragraphs(options?.length || { min: 2, max: 5 })
      .substring(0, 100) + '…',
  defaultOptions: { length: 3 },
  optionsForm: ({ options, setOptions }) => (
    <Box>
      <FormField label="Number of paragraphs" marginBottom={0}>
        <Input
          type="number"
          value={options.length}
          onChange={(event) =>
            setOptions({ length: parseInt(event.target.value, 10) })
          }
        />
      </FormField>
    </Box>
  ),
}

export default [slug, paragraph, paragraphs, sentence]
