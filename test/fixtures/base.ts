import { FieldType, ViewType } from '@airtable/blocks/models'
export default {
  base: {
    id: 'appRandomRecordGenerator',
    name: 'Random record generator',
    color: 'gray',
    tables: [
      {
        id: 'tblReferencedTabl',
        name: 'Referenced table',
        description: '',
        fields: [
          {
            id: 'fldName',
            name: 'Name',
            description: '',
            type: FieldType.SINGLE_LINE_TEXT,
            options: null,
          },
          {
            id: 'fldNotes',
            name: 'Notes',
            description: '',
            type: FieldType.MULTILINE_TEXT,
            options: null,
          },
          {
            id: 'fldStatus',
            name: 'Status',
            description: '',
            type: FieldType.SINGLE_SELECT,
            options: {
              choices: [
                {
                  id: 'selTodo',
                  name: 'Todo',
                  color: 'redLight2',
                },
                {
                  id: 'selInProgress',
                  name: 'In progress',
                  color: 'yellowLight2',
                },
                {
                  id: 'selDone',
                  name: 'Done',
                  color: 'greenLight2',
                },
              ],
            },
          },
          {
            id: 'fldTable2',
            name: 'Table 2',
            description: '',
            type: FieldType.MULTIPLE_RECORD_LINKS,
            options: {
              linkedTableId: 'tblSampleRecords',
              isReversed: false,
              prefersSingleRecordLink: false,
              inverseLinkFieldId: 'fldReference',
              viewIdForRecordSelection: undefined,
            },
          },
        ],
        views: [
          {
            id: 'viwGridView',
            name: 'Grid view',
            type: ViewType.GRID,
            fieldOrder: {
              fieldIds: ['fldName', 'fldNotes', 'fldStatus', 'fldTable2'],
              visibleFieldCount: 4,
            },
            records: [],
          },
        ],
        records: [],
      },
      {
        id: 'tblSampleRecords',
        name: 'Sample records',
        description: '',
        fields: [
          {
            id: 'fldName2',
            name: 'Name',
            description: '',
            type: FieldType.SINGLE_LINE_TEXT,
            options: null,
          },
          {
            id: 'fldNotes2',
            name: 'Notes',
            description: '',
            type: FieldType.MULTILINE_TEXT,
            options: null,
          },
          {
            id: 'fldStatus2',
            name: 'Status',
            description: '',
            type: FieldType.SINGLE_SELECT,
            options: {
              choices: [
                {
                  id: 'selTodo2',
                  name: 'Todo',
                  color: 'redLight2',
                },
                {
                  id: 'selInProgress2',
                  name: 'In progress',
                  color: 'yellowLight2',
                },
                {
                  id: 'selDone2',
                  name: 'Done',
                  color: 'greenLight2',
                },
              ],
            },
          },
          {
            id: 'fldEmail',
            name: 'Email',
            description: '',
            type: FieldType.EMAIL,
            options: null,
          },
          {
            id: 'fldPhoto',
            name: 'Photo',
            description: '',
            type: FieldType.MULTIPLE_ATTACHMENTS,
            options: {
              isReversed: false,
            },
          },
          {
            id: 'fldmultiselect',
            name: 'multi-select',
            description: '',
            type: FieldType.MULTIPLE_SELECTS,
            options: {
              choices: [
                {
                  id: 'selREEEE',
                  name: 'REEEE',
                  color: 'redLight2',
                },
                {
                  id: 'selInProgress3',
                  name: 'In progress',
                  color: 'yellowLight2',
                },
                {
                  id: 'selDone3',
                  name: 'Done',
                  color: 'greenLight2',
                },
              ],
            },
          },
          {
            id: 'fldAddress1',
            name: 'Address 1',
            description: '',
            type: FieldType.SINGLE_LINE_TEXT,
            options: null,
          },
          {
            id: 'fldCity',
            name: 'City',
            description: '',
            type: FieldType.SINGLE_LINE_TEXT,
            options: null,
          },
          {
            id: 'fldZipCode',
            name: 'Zip code',
            description: '',
            type: FieldType.NUMBER,
            options: {
              precision: 0,
            },
          },
          {
            id: 'fldphone',
            name: 'phone',
            description: '',
            type: FieldType.PHONE_NUMBER,
            options: null,
          },
          {
            id: 'fldFirstName',
            name: 'First name',
            description: '',
            type: FieldType.SINGLE_LINE_TEXT,
            options: null,
          },
          {
            id: 'fldLastName',
            name: 'Last name',
            description: '',
            type: FieldType.SINGLE_LINE_TEXT,
            options: null,
          },
          {
            id: 'fldReference',
            name: 'Reference',
            description: '',
            type: FieldType.MULTIPLE_RECORD_LINKS,
            options: {
              linkedTableId: 'tblReferencedTabl',
              isReversed: false,
              prefersSingleRecordLink: false,
              inverseLinkFieldId: 'fldTable2',
              viewIdForRecordSelection: undefined,
            },
          },
        ],
        views: [
          {
            id: 'viwGridView2',
            name: 'Grid view',
            type: ViewType.GRID,
            fieldOrder: {
              fieldIds: [
                'fldName2',
                'fldFirstName',
                'fldLastName',
                'fldNotes2',
                'fldPhoto',
                'fldStatus2',
                'fldEmail',
                'fldmultiselect',
                'fldAddress1',
                'fldCity',
                'fldReference',
                'fldZipCode',
                'fldphone',
              ],
              visibleFieldCount: 13,
            },
            records: [],
          },
          {
            id: 'viwPublicView',
            name: 'Public view',
            type: ViewType.GRID,
            fieldOrder: {
              fieldIds: [
                'fldName2',
                'fldFirstName',
                'fldLastName',
                'fldNotes2',
                'fldPhoto',
                'fldStatus2',
                'fldEmail',
                'fldmultiselect',
                'fldAddress1',
                'fldCity',
                'fldReference',
                'fldZipCode',
                'fldphone',
              ],
              visibleFieldCount: 13,
            },
            records: [],
          },
          {
            id: 'viwForm',
            name: 'Form',
            type: ViewType.FORM,
            fieldOrder: {
              fieldIds: [
                'fldName2',
                'fldFirstName',
                'fldLastName',
                'fldNotes2',
                'fldPhoto',
                'fldStatus2',
                'fldEmail',
                'fldmultiselect',
                'fldAddress1',
                'fldCity',
                'fldReference',
                'fldZipCode',
                'fldphone',
              ],
              visibleFieldCount: 13,
            },
            records: [],
          },
        ],
        records: [],
      },
    ],
    collaborators: [
      {
        id: 'usrGeraldineOsins',
        name: 'Geraldine Osinski',
        email: 'geraldine.osinski@airtable.test',
        profilePicUrl:
          'https://dl.airtable.test/.profilePics/usrGeraldineOsins',
        isActive: true,
      },
      {
        id: 'usrLyndaPurdy',
        name: 'Lynda Purdy',
        email: 'lynda.purdy@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrLyndaPurdy',
        isActive: true,
      },
    ],
  },
}