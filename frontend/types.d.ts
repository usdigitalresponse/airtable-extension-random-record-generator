import React from 'react'
import { FieldType, Field, Base } from '@airtable/blocks/models'

interface GenerateOptions {
  field?: Field
  options?: any
  base: Base
}

interface OptionsFormProps {
  options: any
  field: Field
  setOptions: (options: any) => void
}

declare global {
  interface FieldConfiguration {
    field: Field
    generator: string
    options: any
  }

  interface SavedSettings {
    tableId: string
    numberOfRecords: number
    fieldConfigurations: FieldConfiguration[]
  }

  interface RandomGenerator {
    id: string
    name: string
    description?: string
    types: FieldType[]
    generate: (GenerateOptions?) => any
    preview?: (GenerateOptions?) => any
    defaultOptions?: any
    optionsForm?: React.FC<OptionsFormProps>
  }
}
