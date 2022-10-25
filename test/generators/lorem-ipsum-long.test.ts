import { LoremIpsum } from 'lorem-ipsum'
import LoremIpsumLongGenerator from '../../frontend/lib/generators/generators/lorem-ipsum-long'

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

describe('Generators', () => {
  describe('Lorem ipsum long', () => {
    it('Generates multiple paragraphs of lorem ipsum', () => {
      const generator = LoremIpsumLongGenerator({ lorem })
      const text = generator.generate()
      expect(text.split('\n').length > 2).toBeTruthy()
      expect(generator.generate(true).includes('...')).toBeTruthy()
    })
  })
})
