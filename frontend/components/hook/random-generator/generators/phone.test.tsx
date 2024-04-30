import '@testing-library/jest-dom'
import phoneGenerators from './phone'

const [phone, phoneImei] = phoneGenerators

describe('Generators: Phone', () => {
  describe('Single select', () => {
    it('Generates a US phone number', async () => {
      expect(phone.generate()).toBeTruthy()
    })

    it('Generates an IMEI number', async () => {
      expect(phoneImei.generate()).toBeTruthy()
      expect(phoneImei.generate()).toHaveLength(18)
    })
  })
})
