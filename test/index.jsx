import TestDriver from '@airtable/blocks-testing'
import fixture from './fixtures/base'
import RandomGeneratorExtension from '../frontend'

const testDriver = new TestDriver(fixture)

render(
  <testDriver.Container>
    <RandomGeneratorExtension />
  </testDriver.Container>
)
