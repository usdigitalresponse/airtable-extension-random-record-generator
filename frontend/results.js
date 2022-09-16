import { Box, Heading, Text, ProgressBar, Button } from '@airtable/blocks/ui'
import React from 'react'

const GenerateResults = ({ generated, numberOfRecords, onDone }) => (
  <Box marginTop="1rem">
    <Heading>Generating records</Heading>
    <Text>
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
