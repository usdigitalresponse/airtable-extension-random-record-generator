import DateGenerator from '../../frontend/lib/generators/generators/date'

describe('Generators', () => {
  describe('Date', () => {
    it('Generates a random date', () => {
      const generator = DateGenerator()
      expect(generator.generate().split('-').length).toBe(3)
    })
  })
})
