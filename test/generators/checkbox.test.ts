import CheckboxGenerator from '../../frontend/lib/generators/generators/checkbox'

const testBoolean = Math.random() > 0.5

describe('Generators', () => {
  describe('Checkbox', () => {
    it('Generates a random checkbox', () => {
      const generator = CheckboxGenerator({ boolean: testBoolean })
      expect(generator.generate()).toBe(testBoolean)
    })
  })
})
