import React from 'react'
import { Box, FormField, Select } from '@airtable/blocks/ui'
import { faker } from '@faker-js/faker'
import { FieldType } from '@airtable/blocks/models'

const SAMPLE_PDF =
  'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'

const IMAGE_TYPES = [
  {
    value: 'abstract',
    label: 'Abstract',
  },
  {
    value: 'animals',
    label: 'Animals',
  },
  {
    value: 'business',

    label: 'Business',
  },
  {
    value: 'cats',
    label: 'Cats',
  },
  {
    value: 'city',
    label: 'City',
  },
  { value: 'fashion', label: 'Fashion' },
  {
    value: 'food',
    label: 'Food',
  },
  {
    value: 'nature',
    label: 'Nature',
  },
  {
    value: 'people',
    label: 'People',
  },
  {
    value: 'sports',
    label: 'Sports',
  },
  {
    value: 'transport',
    label: 'Transport',
  },
]

const image: RandomGenerator = {
  id: 'image',
  name: 'Image',
  types: [FieldType.MULTIPLE_ATTACHMENTS],
  generate: ({ options }) => [
    { url: faker.image.urlLoremFlickr({ category: options.category }) },
  ],
  preview: ({ options }) => (
    <img
      src={faker.image.urlLoremFlickr({
        category: options.category,
        width: 128,
        height: 80,
      })}
      alt="random"
      aria-hidden
    />
  ),
  defaultOptions: { category: 'cats' },
  optionsForm: ({ options, setOptions }) => (
    <Box>
      <FormField label="Image types" marginBottom={0}>
        <Select
          options={IMAGE_TYPES}
          value={options.category}
          onChange={(newCategory) => setOptions({ category: newCategory })}
        />
      </FormField>
    </Box>
  ),
}

const pdfDocument: RandomGenerator = {
  id: 'pdfDocument',
  name: 'PDF Document',
  types: [FieldType.MULTIPLE_ATTACHMENTS],
  generate: () => [{ url: SAMPLE_PDF }],
  preview: () => (
    <a href={SAMPLE_PDF} target="_blank" rel="noreferrer">
      PDF Document
    </a>
  ),
}

export default [image, pdfDocument]
