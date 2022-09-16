import React from 'react'
import { act } from 'react-dom/test-utils'
import TestDriver from '@airtable/blocks-testing'
import {
  render,
  screen,
  waitFor,
  getByRole,
  getAllByRole,
  getByText,
  getNodeText,
} from '@testing-library/react'
import baseFixture from './fixtures/base'
import RandomRecordGeneratorApp from '../frontend/app'
import userEvent from '@testing-library/user-event'

const openAsync = async (table, view, field) => {
  act(() => {
    const input = screen.getByLabelText('Table')
    const option = screen.getByText(table)

    userEvent.selectOptions(input, [option])
  })

  act(() => {
    const input = screen.getByLabelText('View')
    const option = screen.getByText(view)

    userEvent.selectOptions(input, [option])
  })

  act(() => {
    const input = screen.getByLabelText('Field')
    const option = screen.getByText(field)

    userEvent.selectOptions(input, [option])
  })

  return waitFor(() => screen.getByRole('button', { name: 'Add' }))
}

describe('TodoApp', () => {
  let mutations
  let addMutation = (mutation) => mutations.push(mutation)
  let testDriver

  beforeEach(() => {
    testDriver = new TestDriver(baseFixture)
    mutations = []
    testDriver.watch('mutation', addMutation)

    render(
      <testDriver.Container>
        <RandomRecordGeneratorApp />
      </testDriver.Container>
    )
  })

  afterEach(() => {
    testDriver.unwatch('mutations', addMutation)
  })

  it('renders a list of fields for the current table', async () => {
    await openAsync('Table 2', 'Grid view', 'Name')
    expect(true)
  })
})
