/**
 * @jest-environment jsdom
 */
import TestDriver from '@airtable/blocks-testing'
import SelectMultipleGenerator from '../../frontend/lib/generators/generators/select-multiple'

const choices = [
  { id: 1, name: 'Choice 1' },
  { id: 2, name: 'Choice 2' },
  { id: 3, name: 'Choice 3' },
  { id: 4, name: 'Choice 4' },
]

describe('Generators', () => {
  describe('Select: multiple', () => {
    it('Selects multiple items', () => {
      const generator = SelectMultipleGenerator()
      console.log(generator.generate(false, { options: { choices } }))
      expect(generator.generate(false, { options: { choices } })).toBeTruthy()
    })
  })
})
