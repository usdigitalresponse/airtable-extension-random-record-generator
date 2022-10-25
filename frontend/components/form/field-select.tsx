import React from 'react'
import { FormField, Box, colors, Text, Select } from '@airtable/blocks/ui'
import { Table, Field } from '@airtable/blocks/models'
import Sample from './sample'

interface Props {
  table: Table
  field: Field
  fieldSettings: object
  setFieldSettings: (fieldSettings: object) => void
  generators: any
}

/**
 * A field select - used to select a generator for a field.
 * @returns
 */
const FieldSelect: React.FC<Props> = ({
  table,
  field,
  fieldSettings,
  setFieldSettings,
  generators,
}) => {
  const createPermission = table.checkPermissionsForCreateRecord({
    [field.id]: null,
  })

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      flexDirection="row"
      key={field.id}
      borderBottom="thick"
      marginBottom={2}
      paddingY={2}
    >
      <Box width="50%">
        {createPermission.hasPermission ? (
          <FormField label={field.name}>
            <Select
              value={fieldSettings[field.id]}
              onChange={(newValue) => {
                const newSettings = { ...fieldSettings }
                // @ts-ignore
                newSettings[field.id] = newValue
                setFieldSettings(newSettings)
              }}
              options={[
                { label: 'None', value: false },
                ...generators
                  .filter((generator) => generator.types.includes(field.type))
                  .map((generator) => ({
                    label: generator.name,
                    value: generator.id,
                  })),
              ]}
            />
          </FormField>
        ) : (
          <Text textColor={colors.RED_DARK_1}>
            {
              // @ts-ignore
              createPermission.reasonDisplayString
            }
          </Text>
        )}
      </Box>
      <Box width="50%">
        {fieldSettings[field.id] && (
          <Box marginLeft={4}>
            <Sample generatorId={fieldSettings[field.id]} field={field} />
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default FieldSelect
