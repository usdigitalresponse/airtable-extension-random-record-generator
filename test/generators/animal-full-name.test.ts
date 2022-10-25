import AnimalFullNameGenerator from '../../frontend/lib/generators/generators/animal-full-name'

const testName = 'Cecil'
const testAnimal = 'Cat'

describe('Generators', () => {
  describe('Animal full name', () => {
    it('Generates a random animal full name', () => {
      const generator = AnimalFullNameGenerator({
        animal: testAnimal,
        firstName: testName,
      })
      const name = generator.generate()
      expect(name).toBe(`${testName} ${testAnimal}`)
    })
  })
})
