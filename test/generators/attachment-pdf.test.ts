import AttachmentPdfGenerator from '../../frontend/lib/generators/generators/attachment-pdf'

describe('Generators', () => {
  describe('Attachment: PDF', () => {
    it('Generates a random pdf', () => {
      const generator = AttachmentPdfGenerator()

      expect(generator.generate(true)).toBe('📑')

      expect(JSON.stringify(generator.generate())).toBe(
        JSON.stringify([
          {
            url: `https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf`,
          },
        ])
      )
    })
  })
})
