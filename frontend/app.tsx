import React from 'react'
import Container from './components/common/container'
import RandomRecordForm from './components/form'

/**
 * The main app component. Fetches the currently selected table using
 * the cursor, checks access to create records in the table, then
 * renders the generate record form.
 * @returns
 */
const RandomRecordGeneratorApp: React.FC = () => (
  <Container>
    <RandomRecordForm />
  </Container>
)

export default RandomRecordGeneratorApp
