import personGenerators from './person'

describe('Generators: Person', () => {
  for (const generator of personGenerators) {
    it(`Generates as ${generator.name}`, () => {
      const result = generator.generate()
      expect(result).toBeTruthy()
    })
  }
})
