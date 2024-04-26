import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import testDriver from '../../../test/driver'
import TableSelect from './table-select'

describe('TableSelect', () => {
  it('Renders a table picker', async () => {
    const table = testDriver.base.getTableByName('Table A')
    const setTable = jest.fn()
    const permissionError = false
    render(
      <testDriver.Container>
        <TableSelect
          table={table}
          setTable={setTable}
          permissionError={permissionError}
        />
      </testDriver.Container>
    )
    await screen.findByRole('combobox', { name: /select a table/i })
    expect(
      screen.getByRole('combobox', { name: /select a table/i })
    ).toBeInTheDocument()
  })

  it('Shows an error when a user does not have access to a table', async () => {
    const table = testDriver.base.getTableByName('Table A')
    const setTable = jest.fn()
    const permissionError = true
    render(
      <testDriver.Container>
        <TableSelect
          table={table}
          setTable={setTable}
          permissionError={permissionError}
        />
      </testDriver.Container>
    )
    await screen.findByRole('combobox', { name: /select a table/i })
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })
})
