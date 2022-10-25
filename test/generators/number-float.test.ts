import NumberFloatGenerator from '../../frontend/lib/generators/generators/number-float'

const float = Math.random()

describe('Generators', () => {
  describe('Number: float', () => {
    it('Generates a random number', () => {
      const generator = NumberFloatGenerator({ float })
      expect(generator.generate()).toBe(float)
    })
  })
})
