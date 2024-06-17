import React, { useState, useEffect } from 'react'
import { Table } from '@airtable/blocks/models'
import {
  Box,
  Loader,
  ProgressBar,
  Button,
  Text,
  useBase,
} from '@airtable/blocks/ui'
import useRandomGenerator from '../../hook/random-generator'
import firstLetterContext from '../../hook/random-generator/first-letter-context'

interface Props {
  table: Table
  fieldConfigurations: FieldConfiguration[]
  numberOfRecords: number
  done: () => void
}

const GenerateRecords: React.FC<Props> = ({
  table,
  fieldConfigurations,
  numberOfRecords,
  done,
}) => {
  const base = useBase()
  const [progress, setProgress] = useState(0)
  const { generate } = useRandomGenerator()

  /**
   * Generates records using the field configurations and the number of records.
   */
  const generateRecords = async () => {
    for (let i = 0; i < numberOfRecords; i++) {
      firstLetterContext.set()
      const recordData = {}
      for (const fieldConfiguration of fieldConfigurations.filter(
        (fieldConfiguration) => fieldConfiguration.generator
      )) {
        recordData[fieldConfiguration.field.id] = await generate({
          id: fieldConfiguration.generator,
          base,
          field: fieldConfiguration.field,
          options: fieldConfiguration.options,
        })
      }
      await table.createRecordAsync(recordData)
      setProgress(i + 1)
    }
  }

  useEffect(() => {
    generateRecords()
  }, [table, fieldConfigurations, numberOfRecords])

  return (
    <Box>
      <Text fontWeight="bold" variant="paragraph">
        {progress < numberOfRecords ? (
          <>
            Generating {numberOfRecords} record{numberOfRecords > 1 && 's'}...
          </>
        ) : (
          <>
            Generated {progress} record{progress > 1 && 's'}
          </>
        )}
      </Text>
      <ProgressBar progress={progress / numberOfRecords} />
      <Box paddingY={2} textAlign="center">
        {progress < numberOfRecords ? (
          <Loader />
        ) : (
          <Box>
            <Button variant="primary" onClick={done}>
              Close
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default GenerateRecords
