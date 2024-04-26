import TestDriver from '@airtable/blocks-testing'
import '@testing-library/jest-dom'
import attachmentGenerators from './attachment'

const [image, pdfDocument] = attachmentGenerators

describe('Generators: Attachments', () => {
  it('Generates an image', async () => {
    expect(image.generate({ options: { category: 'cats' } })[0].url).toMatch(
      /loremflickr.com/
    )
  })

  it('Generates an PDF file', async () => {
    expect(pdfDocument.generate()[0].url).toMatch(/\.pdf/)
  })
})
