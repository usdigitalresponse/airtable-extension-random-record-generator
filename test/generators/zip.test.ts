import ZipGenerator from '../../frontend/lib/generators/generators/zip'

describe('Generators', () => {
  describe('Zip code', () => {
    it('Generates a random zip code', () => {
      const generator = ZipGenerator()
      const zip = generator.generate()
      expect(typeof zip).toBe('number')
      expect(zip > 100).toBeTruthy()
    })
  })
})
