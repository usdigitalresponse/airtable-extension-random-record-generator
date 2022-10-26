/**
 * @jest-environment jsdom
 */
import TestDriver from '@airtable/blocks-testing'
import SelectMultipleGenerator from '../../frontend/lib/generators/generators/select-multiple'
import fixtureBase from '../fixtures/base'

const choices = [
  { id: 1, name: 'Choice 1' },
  { id: 2, name: 'Choice 2' },
  { id: 3, name: 'Choice 3' },
  { id: 4, name: 'Choice 4' },
]

describe('Generators', () => {
  beforeAll(() => {
    new TestDriver(fixtureBase)
  })
  describe('Select: multiple', () => {
    it('Selects multiple items', () => {
      const generator = SelectMultipleGenerator()
      expect(generator.generate(false, { options: { choices } })).toBeTruthy()
      expect(
        generator.generate(false, { options: { choices: [choices[0]] } }).length
      ).toBe(1)
    })
  })
})
