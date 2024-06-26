import { FieldType, ViewType } from '@airtable/blocks/models'

export default {
  base: {
    id: 'appRandomRecordGe',
    name: 'Random Record Generator demo',
    color: 'greenDusty',
    tables: [
      {
        id: 'tblTableA',
        name: 'Table A',
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
            id: 'fldPhone',
            name: 'Phone',
            description: '',
            type: FieldType.PHONE_NUMBER,
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
            id: 'fldStreetAddress',
            name: 'Street address',
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
            id: 'fldState',
            name: 'State',
            description: '',
            type: FieldType.SINGLE_LINE_TEXT,
            options: null,
          },
          {
            id: 'fldMultipleOption',
            name: 'Multiple options',
            description: '',
            type: FieldType.MULTIPLE_SELECTS,
            options: {
              choices: [
                {
                  id: 'selOptionA',
                  name: 'Option A',
                  color: 'blueLight2',
                },
                {
                  id: 'selOptionB',
                  name: 'Option B',
                  color: 'cyanLight2',
                },
                {
                  id: 'selOptionC',
                  name: 'Option C',
                  color: 'tealLight2',
                },
              ],
            },
          },
          {
            id: 'fldDate',
            name: 'Date',
            description: '',
            type: FieldType.DATE,
            options: {
              dateFormat: {
                name: 'local',
                format: 'l',
              },
            },
          },
          {
            id: 'fldDateWithTime',
            name: 'Date with time',
            description: '',
            type: FieldType.DATE_TIME,
            options: {
              dateFormat: {
                name: 'local',
                format: 'l',
              },
              timeFormat: {
                name: '12hour',
                format: 'h:mma',
              },
              timeZone: 'client',
            },
          },
          {
            id: 'fldCheckbox',
            name: 'Checkbox',
            description: '',
            type: FieldType.CHECKBOX,
            options: {
              icon: 'check',
              color: 'greenBright',
            },
          },
          {
            id: 'fldURL',
            name: 'URL',
            description: '',
            type: FieldType.URL,
            options: null,
          },
          {
            id: 'fldIntegerNumber',
            name: 'Integer number',
            description: '',
            type: FieldType.NUMBER,
            options: {
              precision: 0,
            },
          },
          {
            id: 'fldDecimalNumber',
            name: 'Decimal number',
            description: '',
            type: FieldType.NUMBER,
            options: {
              precision: 8,
            },
          },
          {
            id: 'fldPercentage',
            name: 'Percentage',
            description: '',
            type: FieldType.PERCENT,
            options: {
              precision: 0,
            },
          },
          {
            id: 'fldDuration',
            name: 'Duration',
            description: '',
            type: FieldType.DURATION,
            options: {
              durationFormat: 'h:mm',
            },
          },
          {
            id: 'fldRating',
            name: 'Rating',
            description: '',
            type: FieldType.RATING,
            options: {
              icon: 'star',
              max: 5,
              color: 'yellowBright',
            },
          },
          {
            id: 'fldLinkSingle',
            name: 'Link - single',
            description: '',
            type: FieldType.MULTIPLE_RECORD_LINKS,
            options: {
              linkedTableId: 'tblTableB',
              isReversed: false,
              prefersSingleRecordLink: true,
              inverseLinkFieldId: 'fldTableA',
              viewIdForRecordSelection: undefined,
            },
          },
          {
            id: 'fldLinkMultiple',
            name: 'Link - multiple',
            description: '',
            type: FieldType.MULTIPLE_RECORD_LINKS,
            options: {
              linkedTableId: 'tblTableB',
              isReversed: false,
              prefersSingleRecordLink: false,
              inverseLinkFieldId: 'fldTableACopy',
              viewIdForRecordSelection: undefined,
            },
          },
          {
            id: 'fldAttachments',
            name: 'Attachments',
            description: '',
            type: FieldType.MULTIPLE_ATTACHMENTS,
            options: {
              isReversed: false,
            },
          },
          {
            id: 'fldDollars',
            name: 'Dollars',
            description: '',
            type: FieldType.CURRENCY,
            options: {
              precision: 2,
              symbol: '$',
            },
          },
          {
            id: 'fldEuros',
            name: 'Euros',
            description: '',
            type: FieldType.CURRENCY,
            options: {
              precision: 2,
              symbol: '\u20AC',
            },
          },
        ],
        views: [
          {
            id: 'viwGridView',
            name: 'Grid view',
            type: ViewType.GRID,
            fieldOrder: {
              fieldIds: [
                'fldName',
                'fldAttachments',
                'fldNotes',
                'fldPhone',
                'fldStatus',
                'fldStreetAddress',
                'fldCity',
                'fldState',
                'fldMultipleOption',
                'fldDate',
                'fldDateWithTime',
                'fldCheckbox',
                'fldURL',
                'fldIntegerNumber',
                'fldDecimalNumber',
                'fldPercentage',
                'fldDuration',
                'fldRating',
                'fldLinkSingle',
                'fldLinkMultiple',
                'fldDollars',
                'fldEuros',
              ],
              visibleFieldCount: 22,
            },
            records: [],
          },
        ],
        records: [],
      },
      {
        id: 'tblTableB',
        name: 'Table B',
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
            id: 'fldTableA',
            name: 'Table A',
            description: '',
            type: FieldType.MULTIPLE_RECORD_LINKS,
            options: {
              linkedTableId: 'tblTableA',
              isReversed: false,
              prefersSingleRecordLink: false,
              inverseLinkFieldId: 'fldLinkSingle',
              viewIdForRecordSelection: undefined,
            },
          },
          {
            id: 'fldTableACopy',
            name: 'Table A copy',
            description: '',
            type: FieldType.MULTIPLE_RECORD_LINKS,
            options: {
              linkedTableId: 'tblTableA',
              isReversed: false,
              prefersSingleRecordLink: false,
              inverseLinkFieldId: 'fldLinkMultiple',
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
              fieldIds: ['fldName2', 'fldTableA', 'fldTableACopy'],
              visibleFieldCount: 3,
            },
            records: [
              {
                id: 'recRecordA',
                color: null,
              },
              {
                id: 'recRecordB',
                color: null,
              },
              {
                id: 'recRecordC',
                color: null,
              },
            ],
          },
        ],
        records: [
          {
            id: 'recRecordA',
            commentCount: 0,
            createdTime: '2024-02-09T15:08:05.000Z',
            cellValuesByFieldId: {
              fldName2: 'Record A',
              fldTableA: null,
              fldTableACopy: null,
            },
          },
          {
            id: 'recRecordB',
            commentCount: 0,
            createdTime: '2024-02-09T15:08:05.000Z',
            cellValuesByFieldId: {
              fldName2: 'Record B',
              fldTableA: null,
              fldTableACopy: null,
            },
          },
          {
            id: 'recRecordC',
            commentCount: 0,
            createdTime: '2024-02-09T15:08:05.000Z',
            cellValuesByFieldId: {
              fldName2: 'Record C',
              fldTableA: null,
              fldTableACopy: null,
            },
          },
        ],
      },
    ],
    collaborators: [
      {
        id: 'usrJuanThompson',
        name: 'Juan Thompson',
        email: 'juan.thompson@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrJuanThompson',
        isActive: true,
      },
      {
        id: 'usrBettyGleason',
        name: 'Betty Gleason',
        email: 'betty.gleason@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrBettyGleason',
        isActive: true,
      },
      {
        id: 'usrMikeMiller',
        name: 'Mike Miller',
        email: 'mike.miller@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrMikeMiller',
        isActive: true,
      },
      {
        id: 'usrBonnieMoore',
        name: 'Bonnie Moore',
        email: 'bonnie.moore@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrBonnieMoore',
        isActive: true,
      },
      {
        id: 'usrAmyProhaska',
        name: 'Amy Prohaska',
        email: 'amy.prohaska@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrAmyProhaska',
        isActive: true,
      },
      {
        id: 'usrDeloresWard',
        name: 'Delores Ward',
        email: 'delores.ward@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrDeloresWard',
        isActive: true,
      },
      {
        id: 'usrAbelFranecki',
        name: 'Abel Franecki',
        email: 'abel.franecki@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrAbelFranecki',
        isActive: true,
      },
      {
        id: 'usrHermanTrantow',
        name: 'Herman Trantow',
        email: 'herman.trantow@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrHermanTrantow',
        isActive: true,
      },
      {
        id: 'usrAliciaWalsh',
        name: 'Alicia Walsh',
        email: 'alicia.walsh@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrAliciaWalsh',
        isActive: true,
      },
      {
        id: 'usrJoyHilpert',
        name: 'Joy Hilpert',
        email: 'joy.hilpert@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrJoyHilpert',
        isActive: true,
      },
      {
        id: 'usrOrlandoFeil',
        name: 'Orlando Feil',
        email: 'orlando.feil@airtable.test',
        profilePicUrl: 'https://dl.airtable.test/.profilePics/usrOrlandoFeil',
        isActive: true,
      },
    ],
  },
}
