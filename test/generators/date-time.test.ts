import DateTimeGenerator from '../../frontend/lib/generators/generators/date-time'

describe('Generators', () => {
  describe('Date and time', () => {
    it('Generates a random date and time', () => {
      const generator = DateTimeGenerator()
      expect(new Date(generator.generate()).getHours()).toBeTruthy()
    })
  })
})
