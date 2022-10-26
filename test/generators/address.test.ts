import AddressGenerator from '../../frontend/lib/generators/generators/address'

describe('Generators', () => {
  describe('Address', () => {
    it('Generates a random address', () => {
      const generator = AddressGenerator({ float: 0.5 })
      const address = generator.generate()
      expect(address.includes(Math.floor(0.5 * 100))).toBeTruthy()
    })
  })
})
