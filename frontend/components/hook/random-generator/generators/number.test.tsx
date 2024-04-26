import '@testing-library/jest-dom'
import testDriver from '_test/driver'
import { Field } from '@airtable/blocks/models'
import numberGenerators from './number'

const [number, currency] = numberGenerators

describe('Generators: Numbers', () => {
  it('Generates a number', async () => {
    const table = testDriver.base.getTableByName('Table A')
    const field = table.fields.find(
      (field: Field) => field.id === 'fldIntegerNumber'
    )
    const result = number.generate({ field })
    expect(result).toBeTruthy()
    expect(Math.floor(result)).toBe(result)
    expect(
      number.generate({ field, options: { min: 0, max: 1 } })
    ).toBeLessThan(2)
  })

  it('Generates an float number', async () => {
    const table = testDriver.base.getTableByName('Table A')
    const field = table.fields.find(
      (field: Field) => field.id === 'fldDecimalNumber'
    )
    const result = number.generate({ field })
    expect(result).toBeTruthy()
    expect(Math.floor(result)).not.toBe(result)
    expect(
      number.generate({ field, options: { min: 0, max: 1 } })
    ).toBeLessThan(2)
  })

  it('Generates an valid currency', async () => {
    const table = testDriver.base.getTableByName('Table A')
    const dollarField = table.fields.find(
      (field: Field) => field.id === 'fldDollars'
    )
    const euroField = table.fields.find(
      (field: Field) => field.id === 'fldEuros'
    )

    expect(currency.preview({ field: dollarField })).toMatch(/\$\d+\.\d{2}/)
    expect(currency.preview({ field: euroField })).toMatch(/€\d+\.\d{2}/)
    expect(typeof currency.generate({ field: dollarField })).toBe('number')
  })
})
