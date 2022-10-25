import { Box, Button, ConfirmationDialog, useBase } from '@airtable/blocks/ui'
import { Table } from '@airtable/blocks/models'
import generateContent from '../../lib/generators/generate-content'
import GenerateResults from '../results'
import FieldSelect from './field-select'
import NumberOfRecords from './number-records'
import React, { useState } from 'react'

interface Props {
  table: Table
}

/**
 * Main form component. Handles the form state and generates records.
 * @returns
 */
const GenerateRecordForm: React.FC<Props> = ({ table }) => {
  const base = useBase()

  const [fieldSettings, setFieldSettings] = useState(
    Object.fromEntries(table.fields.map((field) => [field.id, false]))
  )
  const [numberOfRecords, setNumberOfRecords] = useState(100)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [generated, setGenerated] = useState(0)
  const [hasError, setHasError] = useState(false)

  const { generators } = generateContent(base)

  /**
   * Generate records callback. Creates a new generator
   * object then creates records, updating the status state
   * as each record is created.
   */
  const generateRecords = async () => {
    const batchSize = 10
    const recordsToInsert = []
    for (let i = 0; i < numberOfRecords; i++) {
      const { generate } = generateContent(base)
      const record = {}
      for (const [fieldId, generatorId] of Object.entries(fieldSettings)) {
        if (generatorId) {
          record[fieldId] = await generate({
            generatorId,
            field: table.getFieldById(fieldId),
          })
        }
      }
      recordsToInsert.push({ fields: record })
    }
    let i = 0
    while (i < recordsToInsert.length) {
      const recordBatch = recordsToInsert.slice(i, i + batchSize)
      await table.createRecordsAsync(recordBatch)
      i += recordBatch.length
      setGenerated(i)
    }
  }

  // If we are generating records, return the results component
  if (isGenerating) {
    return (
      <GenerateResults
        generated={generated}
        numberOfRecords={numberOfRecords}
        onDone={() => {
          setIsGenerating(false)
          setGenerated(0)
          setFieldSettings(
            Object.fromEntries(table.fields.map((field) => [field.id, false]))
          )
        }}
      />
    )
  }

  // The main form component

  return (
    <Box marginTop={2}>
      {isDialogOpen && (
        <ConfirmationDialog
          title="Are you sure?"
          body={
            <>
              This will generate {numberOfRecords} records in{' '}
              <strong>{table.name}</strong>.
            </>
          }
          onConfirm={() => {
            setIsDialogOpen(false)
            setIsGenerating(true)
            generateRecords()
          }}
          onCancel={() => setIsDialogOpen(false)}
        />
      )}
      <form>
        <NumberOfRecords
          setHasError={setHasError}
          numberOfRecords={numberOfRecords}
          setNumberOfRecords={setNumberOfRecords}
        />
        <Box marginY={2} paddingY={2} borderTop="thick">
          {table.fields.map((field) => (
            <FieldSelect
              key={field.id}
              table={table}
              field={field}
              fieldSettings={fieldSettings}
              setFieldSettings={setFieldSettings}
              generators={generators}
            />
          ))}
        </Box>
        <Box>
          <Button
            variant="primary"
            disabled={hasError}
            onClick={() => {
              setIsDialogOpen(true)
            }}
          >
            Generate records
          </Button>
        </Box>
      </form>
    </Box>
  )
}

export default GenerateRecordForm
