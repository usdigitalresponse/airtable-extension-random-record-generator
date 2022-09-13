import {
  initializeBlock,
  Box,
  Heading,
  useBase,
  useCursor,
  Text,
} from '@airtable/blocks/ui'
import { Table } from '@airtable/blocks/models'
import React from 'react'
import GenerateRecordForm from './form'

const RandomRecordGeneratorApp = () => {
  const base = useBase()
  const cursor = useCursor()
  const activeTable: string | null = cursor.activeTableId
  const table: '' | Table | null | boolean =
    activeTable && base.getTableByIdIfExists(activeTable)

  return (
    <Box width="90%" margin="1.5rem auto">
      <Heading>Random record generator</Heading>
      {table && (
        <>
          <Text>
            Generate unique records for <strong>{table.name}</strong>
          </Text>
          <GenerateRecordForm table={table} />
        </>
      )}
    </Box>
  )
}

initializeBlock(() => <RandomRecordGeneratorApp />)
