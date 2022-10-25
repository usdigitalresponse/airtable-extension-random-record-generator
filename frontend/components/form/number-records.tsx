import React from 'react'
import { Box, colors, FormField, Input } from '@airtable/blocks/ui'

interface Props {
  setHasError: (hasError: boolean) => void
  setNumberOfRecords: (numberOfRecords: number) => void
  numberOfRecords: number
}

const NumberOfRecords: React.FC<Props> = ({
  setHasError,
  setNumberOfRecords,
  numberOfRecords,
}) => (
  <FormField label="Number of records to generate">
    <Input
      type="number"
      value={numberOfRecords + ''}
      max={1000}
      min={1}
      width={100}
      onChange={(event) => {
        const newValue = parseInt(event.target.value, 10)
        setNumberOfRecords(newValue)
        if (newValue > 1000 || !newValue || event.target.value === '') {
          setHasError(true)
        } else {
          setHasError(false)
        }
      }}
    />
    {numberOfRecords > 1000 && (
      <Box padding={2} marginTop={2} backgroundColor={colors.RED_LIGHT_2}>
        You can only generate up to 1000 records at a time.
      </Box>
    )}
    {!numberOfRecords && (
      <Box padding={2} marginTop={2} backgroundColor={colors.RED_LIGHT_2}>
        You must at least generate one record.
      </Box>
    )}
  </FormField>
)

export default NumberOfRecords
