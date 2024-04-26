import React from 'react'
import { FormField, Input } from '@airtable/blocks/ui'

interface Props {
  numberOfRecords: number
  setNumberOfRecords: (numberOfRecords: number) => void
}

const NumberOfRecords: React.FC<Props> = ({
  numberOfRecords,
  setNumberOfRecords,
}) => (
  <FormField label="Number of records to generate">
    <Input
      type="number"
      value={numberOfRecords.toString()}
      onChange={(e) => setNumberOfRecords(parseInt(e.target.value, 10))}
      width={150}
    />
  </FormField>
)

export default NumberOfRecords
