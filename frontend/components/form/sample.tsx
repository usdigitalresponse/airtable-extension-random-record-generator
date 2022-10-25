import React, { useState, useEffect } from 'react'
import { Field } from '@airtable/blocks/models'
import { Text, Loader, colors, useBase } from '@airtable/blocks/ui'
import generateContent from '../../lib/generators/generate-content'

interface Props {
  generatorId: string | boolean
  field: Field
}

const Sample: React.FC<Props> = ({ generatorId, field }) => {
  const base = useBase()
  const [value, setValue] = useState(null)

  const { generate } = generateContent(base)

  useEffect(() => {
    generate({
      generatorId,
      preview: true,
      field,
    }).then((result) => setValue(result))
  }, [generatorId, field, generate])

  if (!generatorId || !field) {
    return null
  }

  return (
    <>
      <Text textColor={colors.GRAY} marginTop={0} fontWeight={700}>
        Sample
      </Text>
      {value ? (
        <Text variant="paragraph" marginTop={2}>
          {value}
        </Text>
      ) : (
        <Loader scale={0.3} />
      )}
    </>
  )
}

export default Sample
