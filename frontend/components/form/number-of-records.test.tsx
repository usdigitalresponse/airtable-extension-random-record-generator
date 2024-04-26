import React, { useState } from 'react'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import testDriver from '../../../test/driver'
import NumberOfRecords from './number-of-records'

describe('NumberOfRecords', () => {
  it('Renders a form for changing the number of records to generate', async () => {
    const TestContainer = () => {
      const [numberOfRecords, setNumberOfRecords] = useState(10)

      return (
        <>
          <NumberOfRecords
            numberOfRecords={numberOfRecords}
            setNumberOfRecords={setNumberOfRecords}
          />
          <h1 data-testid="number-of-records">{numberOfRecords.toString()}</h1>
        </>
      )
    }

    render(
      <testDriver.Container>
        <TestContainer />
      </testDriver.Container>
    )

    await screen.findByRole('spinbutton', {
      name: /number of records to generate/i,
    })

    const input = screen.getByRole('spinbutton', {
      name: /number of records to generate/i,
    })
    expect(input).toBeInTheDocument()
    expect(screen.getByTestId('number-of-records')).toHaveTextContent('10')
    expect(input).toHaveValue(10)
    await act(async () => {
      await userEvent.clear(input)
      userEvent.type(input, '20')
    })
    await screen.findByTestId('number-of-records')

    expect(input).toHaveValue(20)
    expect(screen.getByTestId('number-of-records')).toHaveTextContent('20')
  })
})
