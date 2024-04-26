import { FieldType } from '@airtable/blocks/models'

/**
 * A selection of common supported types.
 */
const fieldTypeGroups: Record<string, FieldType[]> = {
  text: [
    FieldType.SINGLE_LINE_TEXT,
    FieldType.MULTILINE_TEXT,
    FieldType.RICH_TEXT,
  ],
}

export default fieldTypeGroups
