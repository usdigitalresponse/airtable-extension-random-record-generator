import EmailHumanGenerator from '../../frontend/lib/generators/generators/email-human'

const testFirstName = 'Cecil'
const testLastName = 'McCay'

describe('Generators', () => {
  describe('Email - human name', () => {
    it('Generates a random animal email address', () => {
      const generator = EmailHumanGenerator({
        firstName: testFirstName,
        lastName: testLastName,
      })
      expect(generator.generate()).toBe('cmccay@gmail.fake-email.com')
    })
  })
})
