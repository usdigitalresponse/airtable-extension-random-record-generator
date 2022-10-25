import states from 'states-us'
import StateNameGenerator from '../../frontend/lib/generators/generators/state-name'

describe('Generators', () => {
  describe('State name', () => {
    it('Generates a random state name', () => {
      const generator = StateNameGenerator()
      const name = generator.generate()
      expect(states.find((state) => state.name === name)).toBeTruthy()
    })
  })
})
