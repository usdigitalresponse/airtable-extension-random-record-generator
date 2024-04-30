import checkboxGenerator from './checkbox'

const [checkbox] = checkboxGenerator

describe('Generators: Checkbox', () => {
  it('Randomly checks a checkbox', async () => {
    expect(typeof checkbox.generate()).toBe('boolean')
  })
})
