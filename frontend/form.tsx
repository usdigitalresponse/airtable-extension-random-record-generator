import {
  Box,
  FormField,
  Button,
  Input,
  Select,
  Text,
  colors,
  colorUtils,
  ConfirmationDialog,
} from '@airtable/blocks/ui'
import generateContent from './generators'
import GenerateRecords from './generate'
import React, { useState } from 'react'

const GenerateRecordForm = ({ table }) => {
  const [fieldSettings, setFieldSettings] = useState(
    Object.fromEntries(table.fields.map((field) => [field.id, false]))
  )
  const [numberOfRecords, setNumberOfRecords] = useState(100)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)

  const { generators, generate } = generateContent()

  if (isGenerating) {
    return (
      <GenerateRecords
        table={table}
        fieldSettings={fieldSettings}
        numberOfRecords={numberOfRecords}
      />
    )
  }

  return (
    <Box marginTop="1rem">
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
          }}
          onCancel={() => setIsDialogOpen(false)}
        />
      )}
      <form>
        <FormField label="Number of records to generate">
          <Input
            type="number"
            value={numberOfRecords + ''}
            onChange={(event) =>
              setNumberOfRecords(parseInt(event.target.value, 10))
            }
          />
        </FormField>
        <Box
          margin="1rem 0"
          padding="1rem 0"
          borderTop={`2px solid ${colorUtils.getHexForColor(
            colors.GRAY_LIGHT_1
          )}`}
        >
          {table.fields.map((field) => (
            <Box
              display="flex"
              flexWrap="wrap"
              flexDirection="row"
              key={field.id}
              borderBottom={`2px solid ${colorUtils.getHexForColor(
                colors.GRAY_LIGHT_1
              )}`}
              marginBottom="0.5rem"
              paddingBottom="0.5rem"
              paddingTop="0.5rem"
            >
              <Box width="50%">
                <FormField label={field.name}>
                  <Select
                    value={fieldSettings[field.id]}
                    onChange={(newValue) => {
                      const newSettings = { ...fieldSettings }
                      newSettings[field.id] = newValue
                      setFieldSettings(newSettings)
                    }}
                    options={[
                      { label: 'None', value: false },
                      ...generators
                        .filter((generator) =>
                          generator.types.includes(field.type)
                        )
                        .map((generator) => ({
                          label: generator.name,
                          value: generator.id,
                        })),
                    ]}
                  />
                </FormField>
              </Box>
              <Box width="50%">
                {fieldSettings[field.id] && (
                  <Box marginLeft="1rem">
                    <Text
                      textColor={colorUtils.getHexForColor(colors.GRAY_BRIGHT)}
                      marginTop="0"
                      fontWeight={700}
                    >
                      Sample
                    </Text>
                    <Text
                      textColor={colorUtils.getHexForColor(colors.GRAY_BRIGHT)}
                      margin="0.5rem 0"
                    >
                      {generate({
                        generatorId: fieldSettings[field.id],
                        preview: true,
                        field,
                      })}
                    </Text>
                  </Box>
                )}
              </Box>
            </Box>
          ))}
        </Box>
        <Box>
          <Button
            variant="primary"
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
