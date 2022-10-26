import { FieldType } from '@airtable/blocks/models'
import Generator from './generator'

const AttachmentPdfGenerator = (): Generator => ({
  id: 'attachmentsPdf',
  name: 'PDF files',
  types: [FieldType.MULTIPLE_ATTACHMENTS],
  generate: (preview) =>
    preview
      ? '📑'
      : [
          {
            url: `https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf`,
          },
        ],
})

export default AttachmentPdfGenerator
