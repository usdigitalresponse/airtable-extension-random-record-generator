import { FieldType } from '@airtable/blocks/models'
import Generator from './generator'

const LinkMultipleGenerator = ({ base }): Generator => ({
  id: 'multipleLinks',
  name: 'Multiple links',
  types: [FieldType.MULTIPLE_RECORD_LINKS],
  generate: async (preview, field) => {
    const fieldTable = base.getTableByIdIfExists(field.options.linkedTableId)
    const query = await fieldTable.selectRecordsAsync()
    if (!query.recordIds.length) {
      return preview ? 'Cannot load records' : null
    }
    let records = []
    for (let i = 0; i < Math.floor(Math.random() * 5); i++) {
      records.push(
        query.records[Math.floor(Math.random() * query.records.length)]
      )
    }
    records = records.filter((value, index, self) => {
      return self.indexOf(value) === index
    })
    const result = preview
      ? `Records ${records
          .map((record) => record.name || record.id)
          .join(', ')}`
      : records.map((id) => ({ id }))
    query.unloadData()
    return result
  },
})

export default LinkMultipleGenerator
