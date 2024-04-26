import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  FormField,
  Select,
  Text,
  useBase,
} from '@airtable/blocks/ui'
import useRandomGenerator from '../hook/random-generator'

interface Props {
  fieldConfiguration: FieldConfiguration
  setFieldConfiguration: (fieldConfiguration: FieldConfiguration) => void
}

const ConfigureField: React.FC<Props> = ({
  fieldConfiguration,
  setFieldConfiguration,
}) => {
  const [preview, setPreview] = useState(null)
  const { getGeneratorsForType, getGenerator, previewGenerator } =
    useRandomGenerator()
  const { field, generator } = fieldConfiguration
  const base = useBase()

  const updatePreview = async () => {
    const newPreview = await previewGenerator({
      id: generator,
      options: fieldConfiguration?.options,
      field,
      base,
    })
    setPreview(newPreview)
  }

  useEffect(() => {
    if (!generator) {
      return
    }
    updatePreview()
  }, [field, generator, fieldConfiguration.options])

  return (
    <Box marginBottom={2} padding={2} border="default" borderRadius="default">
      <Box display="flex" alignItems="end">
        <FormField label={field.name} flex={1} marginBottom={0}>
          <Select
            options={[
              ...(generator ? [{ value: '_NONE', label: ' - None - ' }] : []),
              ...getGeneratorsForType(field.type).map((generator) => ({
                value: generator.id,
                label: generator.name,
              })),
            ]}
            value={generator}
            onChange={(newValue) => {
              const newGenerator = newValue.toString()
              setFieldConfiguration({
                ...fieldConfiguration,
                generator: newGenerator === '_NONE' ? null : newGenerator,
                options: getGenerator(newGenerator)?.defaultOptions || {},
              })
            }}
          />
        </FormField>
        <Box flex={1}>
          {getGenerator(fieldConfiguration.generator)?.optionsForm && (
            <Box marginLeft={2}>
              {React.createElement(
                getGenerator(fieldConfiguration.generator)?.optionsForm,
                {
                  field,
                  options: fieldConfiguration.options,
                  setOptions: (newOptions) => {
                    setFieldConfiguration({
                      ...fieldConfiguration,
                      options: newOptions,
                    })
                  },
                }
              )}
            </Box>
          )}
        </Box>
      </Box>
      {generator && (
        <Box marginTop={2}>
          <Text textColor="light" fontWeight={500}>
            Preview
          </Text>
          <Box
            padding={2}
            border="thick"
            backgroundColor="lightGray1"
            display="flex"
          >
            <Box flex={1}>{preview}</Box>
            <Box flex={0} textAlign="right">
              <Button
                icon="redo"
                variant="secondary"
                onClick={updatePreview}
                aria-label="Regenerate preview"
              />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  )
  return null
}

export default ConfigureField
