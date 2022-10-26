import HumanFullNameGenerator from '../../frontend/lib/generators/generators/human-full-name'

const testFirstName = 'Cecil'
const testLastName = 'McMurty'

describe('Generators', () => {
  describe('Human full name', () => {
    it('Generates a random human full name', () => {
      const generator = HumanFullNameGenerator({
        lastName: testLastName,
        firstName: testFirstName,
      })
      const name = generator.generate()
      expect(name).toBe(`${testFirstName} ${testLastName}`)
    })
  })
})
