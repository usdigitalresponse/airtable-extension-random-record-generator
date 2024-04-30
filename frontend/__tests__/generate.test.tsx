import React from 'react'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import testDriver from '_test/driver'
import RandomRecordGeneratorApp from '../app'

const getSelectValue = (value: string): string =>
  JSON.stringify({ notUndefinedValue: value })

describe('Generates records with every generator type', () => {
  let mutations = []
  const addMutation = (mutation) => mutations.push(mutation)

  beforeEach(async () => {
    mutations = []
    testDriver.watch('mutation', addMutation)
    render(
      <testDriver.Container>
        <RandomRecordGeneratorApp />
      </testDriver.Container>
    )
    await screen.findByRole('combobox', { name: /select a table/i })
    userEvent.selectOptions(
      screen.getByRole('combobox', { name: /select a table/i }),
      getSelectValue('tblTableA')
    )
    userEvent.clear(
      screen.getByRole('spinbutton', { name: /number of records/i })
    )
    userEvent.type(
      screen.getByRole('spinbutton', { name: /number of records/i }),
      '1'
    )
    await screen.findByRole('button', { name: /generate/i })
  })

  afterEach(() => {
    testDriver.unwatch('mutation', addMutation)
  })

  it('Provides a form for selecting tables and number of records', async () => {
    expect(
      screen.getByRole('combobox', { name: /select a table/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('spinbutton', { name: /number of records/i })
    ).toBeInTheDocument()
  })

  describe('Attachment generators', () => {
    it('Generates a record with bio value', async () => {
      userEvent.selectOptions(
        screen.getByRole('combobox', { name: /attachments/i }),
        getSelectValue('image')
      )

      await screen.findByRole('aside', { name: /preview for attachments/i })
      expect(
        screen.getByRole('aside', { name: /preview for attachments/i })
      ).toBeInTheDocument()
      expect(
        screen
          .getByRole('aside', { name: /preview for attachments/i })
          .querySelector('img')
      ).toBeInTheDocument()

      await act(async () => {
        userEvent.click(
          screen.getByRole('button', { name: /generate random records/i })
        )
      })

      await screen.findByRole('progressbar')

      expect(mutations[0].type).toBe('createMultipleRecords')
      expect(mutations[0].records[0].cellValuesByFieldId).toHaveProperty(
        'fldAttachments'
      )
      expect(
        mutations[0].records[0].cellValuesByFieldId.fldAttachments[0]
      ).toHaveProperty('url')
    })
  })

  describe('Checkbox generators', () => {
    it('Generates a record with a checkbox randomly checked', async () => {
      userEvent.selectOptions(
        screen.getByRole('combobox', { name: /checkbox/i }),
        getSelectValue('checkbox')
      )

      await screen.findByRole('aside', { name: /preview for checkbox/i })
      expect(
        screen.getByRole('aside', { name: /preview for checkbox/i })
      ).toBeInTheDocument()
      expect(
        screen
          .getByRole('aside', { name: /preview for checkbox/i })
          .querySelector('svg')
      ).toBeInTheDocument()
      await act(async () => {
        userEvent.click(
          screen.getByRole('button', { name: /generate random records/i })
        )
      })

      await screen.findByRole('progressbar')

      expect(mutations[0].type).toBe('createMultipleRecords')
      expect(mutations[0].records[0].cellValuesByFieldId).toHaveProperty(
        'fldCheckbox'
      )
    })
  })

  describe('Date generators', () => {
    it('Generates a record with a random date', async () => {
      userEvent.selectOptions(
        screen.getByRole('combobox', { name: /^date$/i }),
        getSelectValue('date')
      )

      await screen.findByRole('aside', { name: /preview for date$/i })

      expect(
        screen.getByRole('aside', { name: /preview for date$/i })
      ).toBeInTheDocument()
      await act(async () => {
        userEvent.click(
          screen.getByRole('button', { name: /generate random records/i })
        )
      })

      await screen.findByRole('progressbar')

      expect(mutations[0].type).toBe('createMultipleRecords')
      expect(mutations[0].records[0].cellValuesByFieldId).toHaveProperty(
        'fldDate'
      )
    })

    it('Generates a record with a random date and time', async () => {
      userEvent.selectOptions(
        screen.getByRole('combobox', { name: /date with time/i }),
        getSelectValue('date')
      )

      await screen.findByRole('aside', { name: /preview for date with time/i })

      expect(
        screen.getByRole('aside', { name: /preview for date with time/i })
      ).toBeInTheDocument()
      await act(async () => {
        userEvent.click(
          screen.getByRole('button', { name: /generate random records/i })
        )
      })

      await screen.findByRole('progressbar')

      expect(mutations[0].type).toBe('createMultipleRecords')
      expect(mutations[0].records[0].cellValuesByFieldId).toHaveProperty(
        'fldDateWithTime'
      )
    })
  })

  describe('Duration generators', () => {
    it('Generates a record with a random duration', async () => {
      userEvent.selectOptions(
        screen.getByRole('combobox', { name: /duration/i }),
        getSelectValue('duration')
      )

      await screen.findByRole('aside', { name: /preview for duration/i })

      expect(
        screen.getByRole('aside', { name: /preview for duration/i })
      ).toBeInTheDocument()
      await act(async () => {
        userEvent.click(
          screen.getByRole('button', { name: /generate random records/i })
        )
      })

      await screen.findByRole('progressbar')

      expect(mutations[0].type).toBe('createMultipleRecords')
      expect(mutations[0].records[0].cellValuesByFieldId).toHaveProperty(
        'fldDuration'
      )
    })
  })

  describe('Link generators', () => {
    it('Generates a record with a single random link field', async () => {
      userEvent.selectOptions(
        screen.getByRole('combobox', { name: /link - single/i }),
        getSelectValue('link')
      )

      await screen.findByRole('aside', { name: /preview for link - single/i })

      expect(
        screen.getByRole('aside', { name: /preview for link - single/i })
      ).toBeInTheDocument()
      await act(async () => {
        userEvent.click(
          screen.getByRole('button', { name: /generate random records/i })
        )
      })

      await screen.findByRole('progressbar')

      expect(mutations[0].type).toBe('createMultipleRecords')
      expect(mutations[0].records[0].cellValuesByFieldId).toHaveProperty(
        'fldLinkSingle'
      )
    })

    it('Generates a record with a random link with multiple targets', async () => {
      userEvent.selectOptions(
        screen.getByRole('combobox', { name: /link - multiple/i }),
        getSelectValue('link')
      )

      await screen.findByRole('aside', { name: /preview for link - multiple/i })

      expect(
        screen.getByRole('aside', { name: /preview for link - multiple/i })
      ).toBeInTheDocument()
      await act(async () => {
        userEvent.click(
          screen.getByRole('button', { name: /generate random records/i })
        )
      })

      await screen.findByRole('progressbar')

      expect(mutations[0].type).toBe('createMultipleRecords')
      expect(mutations[0].records[0].cellValuesByFieldId).toHaveProperty(
        'fldLinkMultiple'
      )
    })
  })

  describe('Person generators', () => {
    it('Generates a record with first name value', async () => {
      userEvent.selectOptions(
        screen.getByRole('combobox', { name: /name/i }),
        getSelectValue('firstName')
      )

      await screen.findByRole('aside', { name: /preview for name/i })
      expect(
        screen.getByRole('aside', { name: /preview for name/i })
      ).toBeInTheDocument()
      await act(async () => {
        userEvent.click(
          screen.getByRole('button', { name: /generate random records/i })
        )
      })

      await screen.findByRole('progressbar')

      expect(mutations[0].type).toBe('createMultipleRecords')
      expect(mutations[0].records[0].cellValuesByFieldId).toHaveProperty(
        'fldName'
      )
    })

    it('Generates a record with first name value', async () => {
      userEvent.selectOptions(
        screen.getByRole('combobox', { name: /name/i }),
        getSelectValue('lastName')
      )

      await screen.findByRole('aside', { name: /preview for name/i })
      expect(
        screen.getByRole('aside', { name: /preview for name/i })
      ).toBeInTheDocument()
      await act(async () => {
        userEvent.click(
          screen.getByRole('button', { name: /generate random records/i })
        )
      })

      await screen.findByRole('progressbar')

      expect(mutations[0].type).toBe('createMultipleRecords')
      expect(mutations[0].records[0].cellValuesByFieldId).toHaveProperty(
        'fldName'
      )
    })

    it('Generates a record with full name value', async () => {
      userEvent.selectOptions(
        screen.getByRole('combobox', { name: /name/i }),
        getSelectValue('fullName')
      )

      await screen.findByRole('aside', { name: /preview for name/i })
      expect(
        screen.getByRole('aside', { name: /preview for name/i })
      ).toBeInTheDocument()
      await act(async () => {
        userEvent.click(
          screen.getByRole('button', { name: /generate random records/i })
        )
      })

      await screen.findByRole('progressbar')

      expect(mutations[0].type).toBe('createMultipleRecords')
      expect(mutations[0].records[0].cellValuesByFieldId).toHaveProperty(
        'fldName'
      )
    })

    it('Generates a record with sex value', async () => {
      userEvent.selectOptions(
        screen.getByRole('combobox', { name: /name/i }),
        getSelectValue('sex')
      )

      await screen.findByRole('aside', { name: /preview for name/i })
      expect(
        screen.getByRole('aside', { name: /preview for name/i })
      ).toBeInTheDocument()
      await act(async () => {
        userEvent.click(
          screen.getByRole('button', { name: /generate random records/i })
        )
      })

      await screen.findByRole('progressbar')

      expect(mutations[0].type).toBe('createMultipleRecords')
      expect(mutations[0].records[0].cellValuesByFieldId).toHaveProperty(
        'fldName'
      )
    })

    it('Generates a record with gender value', async () => {
      userEvent.selectOptions(
        screen.getByRole('combobox', { name: /name/i }),
        getSelectValue('gender')
      )

      await screen.findByRole('aside', { name: /preview for name/i })
      expect(
        screen.getByRole('aside', { name: /preview for name/i })
      ).toBeInTheDocument()
      await act(async () => {
        userEvent.click(
          screen.getByRole('button', { name: /generate random records/i })
        )
      })

      await screen.findByRole('progressbar')

      expect(mutations[0].type).toBe('createMultipleRecords')
      expect(mutations[0].records[0].cellValuesByFieldId).toHaveProperty(
        'fldName'
      )
    })

    it('Generates a record with job title value', async () => {
      userEvent.selectOptions(
        screen.getByRole('combobox', { name: /name/i }),
        getSelectValue('jobTitle')
      )

      await screen.findByRole('aside', { name: /preview for name/i })
      expect(
        screen.getByRole('aside', { name: /preview for name/i })
      ).toBeInTheDocument()
      await act(async () => {
        userEvent.click(
          screen.getByRole('button', { name: /generate random records/i })
        )
      })

      await screen.findByRole('progressbar')

      expect(mutations[0].type).toBe('createMultipleRecords')
      expect(mutations[0].records[0].cellValuesByFieldId).toHaveProperty(
        'fldName'
      )
    })

    it('Generates a record with job type value', async () => {
      userEvent.selectOptions(
        screen.getByRole('combobox', { name: /name/i }),
        getSelectValue('jobType')
      )

      await screen.findByRole('aside', { name: /preview for name/i })
      expect(
        screen.getByRole('aside', { name: /preview for name/i })
      ).toBeInTheDocument()
      await act(async () => {
        userEvent.click(
          screen.getByRole('button', { name: /generate random records/i })
        )
      })

      await screen.findByRole('progressbar')

      expect(mutations[0].type).toBe('createMultipleRecords')
      expect(mutations[0].records[0].cellValuesByFieldId).toHaveProperty(
        'fldName'
      )
    })

    it('Generates a record with bio value', async () => {
      userEvent.selectOptions(
        screen.getByRole('combobox', { name: /name/i }),
        getSelectValue('bio')
      )

      await screen.findByRole('aside', { name: /preview for name/i })
      expect(
        screen.getByRole('aside', { name: /preview for name/i })
      ).toBeInTheDocument()
      await act(async () => {
        userEvent.click(
          screen.getByRole('button', { name: /generate random records/i })
        )
      })

      await screen.findByRole('progressbar')

      expect(mutations[0].type).toBe('createMultipleRecords')
      expect(mutations[0].records[0].cellValuesByFieldId).toHaveProperty(
        'fldName'
      )
    })
  })
})
