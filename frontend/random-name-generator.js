import {
  initializeBlock,
  Box,
  Heading,
  useBase,
  useCursor,
  Text,
  colorUtils,
  colors,
} from '@airtable/blocks/ui'
import React from 'react'
import GenerateRecordForm from './form'

const RandomRecordGeneratorApp = () => {
  const base = useBase()
  const cursor = useCursor()
  const activeTable = cursor.activeTableId
  const table = activeTable && base.getTableByIdIfExists(activeTable)
  const checkTablePermission = table.checkPermissionsForCreateRecord()

  return (
    <Box width="90%" margin="1.5rem auto">
      {table && (
        <>
          <Text>
            Generate random records for <strong>{table.name}</strong>.{' '}
          </Text>

          {checkTablePermission.hasPermission ? (
            <GenerateRecordForm table={table} />
          ) : (
            <Text textColor={colorUtils.getHexForColor(colors.RED_DARK_1)}>
              {checkTablePermission.reasonDisplayString}
            </Text>
          )}
        </>
      )}
    </Box>
  )
}

export default RandomRecordGeneratorApp
