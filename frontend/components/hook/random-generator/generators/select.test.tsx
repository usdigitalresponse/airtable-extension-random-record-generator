import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import testDriver from '_test/driver'
import { Field } from '@airtable/blocks/models'
import select from './select'

const [singleSelect, multipleSelect] = select

describe('Generators: Select', () => {
  describe('Single select', () => {
    it('Generates a single-select result', async () => {
      const table = testDriver.base.getTableByName('Table A')
      const field = table.fields.find(
        (field: Field) => field.id === 'fldStatus'
      )

      const result = singleSelect.generate({ field, base: testDriver.base })
      expect(field.options.choices.map((choices) => choices.id)).toContain(
        result.id
      )
    })
    it('Previews a single-select result', async () => {
      const table = testDriver.base.getTableByName('Table A')
      const field = table.fields.find(
        (field: Field) => field.id === 'fldStatus'
      )

      render(
        <testDriver.Container>
          {singleSelect.preview({ field, base: testDriver.base })}
          {singleSelect.preview({ field, base: testDriver.base })}
          {singleSelect.preview({ field, base: testDriver.base })}
          {singleSelect.preview({ field, base: testDriver.base })}
        </testDriver.Container>
      )
      const matchingResults = field.options.choices.filter(
        (choice) => screen.queryAllByText(choice.name).length
      )
      expect(matchingResults.length).toBeGreaterThan(0)
    })
  })

  describe('Multiple select', () => {
    it('Generates a multiple-select result', async () => {
      const table = testDriver.base.getTableByName('Table A')
      const field = table.fields.find(
        (field: Field) => field.id === 'fldStatus'
      )

      const result = multipleSelect.generate({ field, base: testDriver.base })
      expect(result).toBeTruthy()
    })
    it('Previews a multiple-select result', async () => {
      const table = testDriver.base.getTableByName('Table A')
      const field = table.fields.find(
        (field: Field) => field.id === 'fldStatus'
      )

      render(
        <testDriver.Container>
          {singleSelect.preview({ field, base: testDriver.base })}
          {singleSelect.preview({ field, base: testDriver.base })}
          {singleSelect.preview({ field, base: testDriver.base })}
          {singleSelect.preview({ field, base: testDriver.base })}
        </testDriver.Container>
      )
      const matchingResults = field.options.choices.filter(
        (choice) => screen.queryAllByText(choice.name).length
      )
      expect(matchingResults.length).toBeGreaterThan(0)
    })
  })
})
