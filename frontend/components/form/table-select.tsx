import React from 'react'
import { TablePicker, FormField, Box } from '@airtable/blocks/ui'
import { Table } from '@airtable/blocks/models'
import Alert from '../common/alert'

interface Props {
  table: Table
  setTable: (table: Table) => void
  permissionError: boolean
}

/**
 * A form field that allows the user to select a table.
 */
const TableSelect: React.FC<Props> = ({ table, setTable, permissionError }) => (
  <>
    <FormField label="Select a table">
      <TablePicker table={table} onChange={(newTable) => setTable(newTable)} />
    </FormField>
    {permissionError && (
      <Alert>You do not have permission to create records in this table.</Alert>
    )}
  </>
)

export default TableSelect
