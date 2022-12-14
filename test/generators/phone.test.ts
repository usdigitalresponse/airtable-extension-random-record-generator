import PhoneGenerator from '../../frontend/lib/generators/generators/phone'

describe('Generators', () => {
  describe('Phone number', () => {
    it('Generates a random phone number', () => {
      const generator = PhoneGenerator()
      expect(typeof generator.generate()).toBe('string')
      expect(generator.generate(true).length).toBe(12)
    })
  })
})
