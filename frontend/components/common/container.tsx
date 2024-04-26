import React from 'react'
import { Box } from '@airtable/blocks/ui'

/**
 * A simple container component to wrap the app in.
 */
const Container: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <Box marginY={2} marginX="auto" paddingX={2} maxWidth={600}>
    {children}
  </Box>
)

export default Container
