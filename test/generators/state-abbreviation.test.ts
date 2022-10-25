import states from 'states-us'
import StateAbbreviationGenerator from '../../frontend/lib/generators/generators/state-abbreviation'

describe('Generators', () => {
  describe('State abbreviation', () => {
    it('Generates a random state abbreviaton', () => {
      const generator = StateAbbreviationGenerator()
      const abbreviation = generator.generate()
      expect(
        states.find((state) => state.abbreviation === abbreviation)
      ).toBeTruthy()
    })
  })
})
