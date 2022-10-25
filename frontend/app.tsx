import {
  Box,
  Heading,
  useBase,
  useCursor,
  Text,
  colorUtils,
  colors,
} from '@airtable/blocks/ui'
import React from 'react'
import GenerateRecordForm from './components/form'

/**
 * The main app component. Fetches the currently selected table using
 * the cursor, checks access to create records in the table, then
 * renders the generate record form.
 * @returns
 */
const RandomRecordGeneratorApp: React.FC = () => {
  const base = useBase()
  const cursor = useCursor()
  const activeTable = cursor.activeTableId
  const table = activeTable && base.getTableByIdIfExists(activeTable)

  // There is no active table.
  if (!table) {
    return (
      <Box padding={2}>
        <Heading size="xlarge">Random Record Generator</Heading>
        <Text textColor={colorUtils.getHexForColor(colors.GRAY_BRIGHT)}>
          Select a table to get started.
        </Text>
      </Box>
    )
  }

  const checkTablePermission = table.checkPermissionsForCreateRecord()

  return (
    <Box width="90%" marginY={2} marginX="auto">
      {table && (
        <>
          <Text variant="paragraph">
            Generate random records for <strong>{table.name}</strong>.{' '}
          </Text>

          {checkTablePermission.hasPermission ? (
            <GenerateRecordForm table={table} />
          ) : (
            <Text
              variant="paragraph"
              textColor={colorUtils.getHexForColor(colors.RED_DARK_1)}
            >
              {
                // @ts-ignore
                checkTablePermission.reasonDisplayString
              }
            </Text>
          )}
        </>
      )}
    </Box>
  )
}

export default RandomRecordGeneratorApp
