import CityGenerator from '../../frontend/lib/generators/generators/city'
import cities from '../../frontend/data/cities'

describe('Generators', () => {
  describe('Cities', () => {
    it('Generates a random city', () => {
      const generator = CityGenerator()
      expect(cities.includes(generator.generate())).toBeTruthy()
    })
  })
})
