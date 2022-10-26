import { LoremIpsum } from 'lorem-ipsum'
import LoremIpsumShortGenerator from '../../frontend/lib/generators/generators/lorem-ipsum-short'

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
  describe('Lorem ipsum short', () => {
    it('Generates single line of lorem ipsum', () => {
      const generator = LoremIpsumShortGenerator({ lorem })
      const text = generator.generate()
      expect(text.split('\n').length).toBe(1)
    })
  })
})
