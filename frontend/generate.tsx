import { Box, Heading, Text, ProgressBar } from '@airtable/blocks/ui'
import React, { useEffect, useState } from 'react'
import generateContent from './generators'

const GenerateRecords = ({ table, fieldSettings, numberOfRecords }) => {
  const [generated, setGenerated] = useState(0)
  useEffect(() => {
    const generateRecords = async () => {
      for (let i = 0; i < numberOfRecords; i++) {
        const { generate } = generateContent()
        const record = {}
        for (const [fieldId, generatorId] of Object.entries(fieldSettings)) {
          if (generatorId) {
            record[fieldId] = generate({
              generatorId,
              field: table.getFieldById(fieldId),
            })
          }
        }
        await table.createRecordAsync(record)
        setGenerated(generated + 1)
      }
    }
    generateRecords()
  }, [fieldSettings, generated, numberOfRecords, table])

  return (
    <Box marginTop="1rem">
      <Heading>Generating records</Heading>
      <Text>
        Generated <strong>{generated}</strong> of{' '}
        <strong>{numberOfRecords}</strong> records.
      </Text>
      {generated === numberOfRecords ? (
        <Text>Done!</Text>
      ) : (
        <ProgressBar progress={generated / numberOfRecords} />
      )}
    </Box>
  )
}

export default GenerateRecords
