import AnimalLastNameGenerator from '../../frontend/lib/generators/generators/animal-last-name'

const testAnimal = 'Cat'

describe('Generators', () => {
  describe('Animal last name', () => {
    it('Generates a random animal first name', () => {
      const generator = AnimalLastNameGenerator({ animal: testAnimal })
      const name = generator.generate()
      expect(name).toBe(testAnimal)
    })
  })
})
