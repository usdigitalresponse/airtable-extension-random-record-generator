/**
 * @jest-environment jsdom
 */
import AttachmentPhotoCatGenerator from '../../frontend/lib/generators/generators/attachment-photo-cat'

describe('Generators', () => {
  beforeAll(() => {
    // @ts-ignore
    window.__getAirtableInterfaceAtVersion = () => 1
  })
  describe('Attachment: Cat Photo', () => {
    it('Generates a random cat photo', () => {
      const generator = AttachmentPhotoCatGenerator()

      expect(generator.generate(true)).toBeTruthy()

      const catPhoto = generator.generate()
      expect(catPhoto).toBeTruthy()
      expect(catPhoto[0].url).toBeTruthy()
      expect(catPhoto[0].url.includes('cataas.com')).toBeTruthy()
    })
  })
})
