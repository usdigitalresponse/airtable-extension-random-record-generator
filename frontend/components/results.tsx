import { Box, Heading, Text, ProgressBar, Button } from '@airtable/blocks/ui'
import React from 'react'

interface Props {
  generated: number
  numberOfRecords: number
  onDone: () => void
}

/**
 * The results component. Displays the number of records generated and
 * a progress bar. Calls onDone when the user clicks a Start Over button
 * once record generation is complete.
 * @returns
 */
const GenerateResults: React.FC<Props> = ({
  generated,
  numberOfRecords,
  onDone,
}) => (
  <Box marginTop="1rem">
    <Heading>Generating records</Heading>
    <Text variant="paragraph">
      Generated <strong>{generated}</strong> of{' '}
      <strong>{numberOfRecords}</strong> records.
    </Text>
    {generated === numberOfRecords ? (
      <Box margin="1rem 0">
        <Text>Done generating records.</Text>
        <Button variant="primary" onClick={onDone} marginTop="1rem">
          Start over
        </Button>
      </Box>
    ) : (
      <ProgressBar progress={generated / numberOfRecords} />
    )}
  </Box>
)

export default GenerateResults
