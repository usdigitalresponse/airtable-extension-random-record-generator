import AnimalFirstNameGenerator from '../../frontend/lib/generators/generators/animal-first-name'

const testName = 'Cecil'

describe('Generators', () => {
  describe('Animal first name', () => {
    it('Generates a random animal first name', () => {
      const generator = AnimalFirstNameGenerator({ firstName: testName })
      const name = generator.generate()
      expect(name).toBe(testName)
    })
  })
})
