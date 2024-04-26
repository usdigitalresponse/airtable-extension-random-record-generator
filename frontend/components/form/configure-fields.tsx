import React from 'react'
import ConfigureField from './configure-field'

interface Props {
  fieldConfigurations: FieldConfiguration[]
  setFieldConfigurations: (fieldConfiguration: FieldConfiguration[]) => void
}

const ConfigureFields: React.FC<Props> = ({
  fieldConfigurations,
  setFieldConfigurations,
}) => {
  return (
    <>
      {fieldConfigurations.map((fieldConfiguration) => (
        <ConfigureField
          key={fieldConfiguration.field.id}
          fieldConfiguration={fieldConfiguration}
          setFieldConfiguration={(newConfiguration) => {
            const newFieldConfigurations = [...fieldConfigurations].map(
              (config) => {
                if (config.field.id === fieldConfiguration.field.id) {
                  return newConfiguration
                }
                return config
              }
            )
            setFieldConfigurations(newFieldConfigurations)
          }}
        />
      ))}
    </>
  )
}

export default ConfigureFields
