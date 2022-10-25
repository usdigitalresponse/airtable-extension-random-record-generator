/**
 * @jest-environment jsdom
 */
import TestDriver from '@airtable/blocks-testing'
import SelectSingleGenerator from '../../frontend/lib/generators/generators/select-single'
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
  describe('Select: single', () => {
    it('Selects a single random item', () => {
      const generator = SelectSingleGenerator()
      const choice = generator.generate(false, { options: { choices } })
      expect(choices.find((c) => c.id === choice.id)).toBeTruthy()
    })
  })
})
