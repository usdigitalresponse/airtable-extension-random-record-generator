import {
  Box,
  FormField,
  Button,
  Input,
  Select,
  Text,
  Loader,
  colors,
  colorUtils,
  ConfirmationDialog,
  useBase,
} from '@airtable/blocks/ui'
import generateContent from './generators'
import GenerateResults from './results'
import React, { useEffect, useState } from 'react'

const GenerateRecordForm = ({ table }) => {
  const base = useBase()
  const [fieldSettings, setFieldSettings] = useState(
    Object.fromEntries(table.fields.map((field) => [field.id, false]))
  )
  const [numberOfRecords, setNumberOfRecords] = useState(100)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [generated, setGenerated] = useState(0)

  const { generators, generate } = generateContent(base)

  const GenerateSample = ({ generatorId, field }) => {
    const [value, setValue] = useState(false)

    useEffect(() => {
      generate({
        generatorId,
        preview: true,
        field,
      }).then((result) => setValue(result))
    }, [generatorId, field])

    return (
      <>
        <Text
          textColor={colorUtils.getHexForColor(colors.GRAY_BRIGHT)}
          marginTop="0"
          fontWeight={700}
        >
          Sample
        </Text>
        {value ? (
          <Text
            textColor={colorUtils.getHexForColor(colors.GRAY_BRIGHT)}
            margin="0.5rem 0"
          >
            {value}
          </Text>
        ) : (
          <Loader scale={0.3} />
        )}
      </>
    )
  }

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

  if (isGenerating) {
    return (
      <GenerateResults
        generated={generated}
        numberOfRecords={numberOfRecords}
        onDone={() => {
          setIsGenerating(false)
          setGenerated(0)
        }}
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
            generateRecords()
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
                {table.checkPermissionsForCreateRecord({ [field.id]: null })
                  .hasPermission ? (
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
                ) : (
                  <Text
                    textColor={colorUtils.getHexForColor(colors.RED_DARK_1)}
                  >
                    {
                      table.checkPermissionsForCreateRecord({
                        [field.id]: null,
                      }).reasonDisplayString
                    }
                  </Text>
                )}
              </Box>
              <Box width="50%">
                {fieldSettings[field.id] && (
                  <Box marginLeft="1rem">
                    <GenerateSample
                      generatorId={fieldSettings[field.id]}
                      field={field}
                    />
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
