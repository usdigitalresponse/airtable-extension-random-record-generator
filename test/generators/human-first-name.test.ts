import HumanFirstNameGenerator from '../../frontend/lib/generators/generators/human-first-name'

const testName = 'Cecil'

describe('Generators', () => {
  describe('Human first name', () => {
    it('Generates a random human first name', () => {
      const generator = HumanFirstNameGenerator({ firstName: testName })
      const name = generator.generate()
      expect(name).toBe(testName)
    })
  })
})
