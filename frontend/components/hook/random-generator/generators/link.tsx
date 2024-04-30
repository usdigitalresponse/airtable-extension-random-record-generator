import React from 'react'
import { Switch } from '@airtable/blocks/ui'
import { Base, Field, FieldType, Record } from '@airtable/blocks/models'

interface LinkedRecordOptions {
  field: Field
  base: Base
  multiple: boolean
}
/**
 * Fetches a random selection of record IDs from a linked table.
 */
const getLinkedRecordIds = async ({
  field,
  base,
  multiple,
}: LinkedRecordOptions): Promise<Record[] | null> => {
  const fieldTable = base.getTableByIdIfExists(
    field.options.linkedTableId as string
  )
  if (!fieldTable) {
    return
  }
  // Load the first field because we are trying to limit record size
  const tableFields = [fieldTable.fields[0]]
  const query = await fieldTable.selectRecordsAsync({ fields: tableFields })
  const records = query.records
  if (!records.length) {
    return
  }
  // If the field prefers single record link, we should only return one record
  if (field.options.prefersSingleRecordLink || !multiple) {
    return [records[Math.floor(Math.random() * records.length)]]
  }
  const randomRecords = records
    .map((record) => Math.random() > 0.5 && record)
    .filter((record) => record)
    .slice(0, 10)

  query.unloadData()
  return randomRecords
}

const link: RandomGenerator = {
  id: 'link',
  name: 'Link to another record',
  types: [FieldType.MULTIPLE_RECORD_LINKS],
  generate: async ({ options, field, base }) => {
    const targetRecords = await getLinkedRecordIds({
      base,
      field,
      multiple: options.multiple,
    })
    return targetRecords.length
      ? targetRecords.map((record) => ({ id: record.id }))
      : null
  },
  preview: async ({ options, field, base }) => {
    const previewRecords = await getLinkedRecordIds({
      base,
      field,
      multiple: options.multiple,
    })
    return previewRecords.map((record) => record.name || record.id).join(', ')
  },
  defaultOptions: { multiple: true },
  optionsForm: ({ field, options, setOptions }) => (
    <Switch
      value={options.multiple}
      disabled={field?.options?.prefersSingleRecordLink ? true : false}
      onChange={(newValue) => setOptions({ multiple: newValue })}
      label="Allow multiple links"
    />
  ),
}

export default [link]
