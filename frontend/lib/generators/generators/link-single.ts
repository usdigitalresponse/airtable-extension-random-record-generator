import { FieldType } from '@airtable/blocks/models'
import Generator from './generator'

const LinkSingleGenerator = ({ base }): Generator => ({
  id: 'singleLink',
  name: 'Single link',
  types: [FieldType.MULTIPLE_RECORD_LINKS],
  generate: async (preview, field) => {
    const fieldTable = base.getTableByIdIfExists(field.options.linkedTableId)
    const query = await fieldTable.selectRecordsAsync()
    if (!query.recordIds.length) {
      return preview ? 'Cannot load record' : null
    }
    const record =
      query.records[Math.floor(Math.random() * query.records.length)]
    const result = preview
      ? `Record ${record.name || record.id}`
      : [{ id: record.id }]
    query.unloadData()
    return result
  },
})

export default LinkSingleGenerator
