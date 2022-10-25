import React from 'react'
import { FieldType } from '@airtable/blocks/models'
import Generator from './generator'

const AttachmentPhotoCatGenerator = (): Generator => ({
  id: 'attachmentsCat',
  name: 'Cat photos',
  types: [FieldType.MULTIPLE_ATTACHMENTS],
  generate: (preview) =>
    preview
      ? (() => (
          <img
            src={`https://cataas.com/cat`}
            alt=""
            style={{ width: '40px' }}
          />
        ))()
      : [{ url: `https://cataas.com/cat?_=${Math.random()}` }],
})

export default AttachmentPhotoCatGenerator
