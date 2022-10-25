import HumanLastNameGenerator from '../../frontend/lib/generators/generators/human-last-name'

const testName = 'McMurty'

describe('Generators', () => {
  describe('Human last name', () => {
    it('Generates a random human last name', () => {
      const generator = HumanLastNameGenerator({ lastName: testName })
      const name = generator.generate()
      expect(name).toBe(testName)
    })
  })
})
