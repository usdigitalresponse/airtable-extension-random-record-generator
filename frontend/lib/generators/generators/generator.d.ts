import { FieldType, Field } from '@airtable/blocks/models'

interface Generator {
  id: string
  name: string
  types: FieldType[]
  generate: (preview: boolean, field: any) => any
}

export default Generator
