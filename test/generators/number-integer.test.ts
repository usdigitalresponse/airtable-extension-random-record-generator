import NumberIntegerGenerator from '../../frontend/lib/generators/generators/number-integer'

const integerNumber = Math.round(Math.random() * 100)

describe('Generators', () => {
  describe('Number: integer', () => {
    it('Generates a random number', () => {
      const generator = NumberIntegerGenerator({ integerNumber })
      expect(generator.generate()).toBe(integerNumber)
    })
  })
})
