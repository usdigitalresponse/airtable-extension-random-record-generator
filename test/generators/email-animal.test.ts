import EmailAnimalGenerator from '../../frontend/lib/generators/generators/email-animal'

const testFirstName = 'Cecil'
const testAnimal = 'Cat'

describe('Generators', () => {
  describe('Email - animal name', () => {
    it('Generates a random animal email address', () => {
      const generator = EmailAnimalGenerator({
        firstName: testFirstName,
        animal: testAnimal,
      })
      expect(generator.generate()).toBe('ccat@gmail.fake-email.com')
    })
  })
})
