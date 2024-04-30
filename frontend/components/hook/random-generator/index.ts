import { FieldType, Field, Base } from '@airtable/blocks/models'
import generators from './generators'

/**
 * A hook that returns random generator functions.
 */
const useRandomGenerator = () => {
  const getGenerators = (): RandomGenerator[] => generators

  /**
   * Returns all generators that support a specific field type.
   */
  const getGeneratorsForType = (type: FieldType): RandomGenerator[] =>
    generators.filter((generator) => generator.types.includes(type))

  /**
   * Returns a generator by its id.
   */
  const getGenerator = (id: string): RandomGenerator =>
    generators.find((generator) => generator.id === id)

  /**
   * Returns a preview of a generator.
   * If the generator has a preview function, it will be used.
   * Otherwise, the generate function will be used.
   */
  const previewGenerator = ({
    id,
    options,
    field,
    base,
  }: {
    id: string
    options: any
    field: Field
    base: Base
  }): any => {
    const generator = getGenerator(id)
    if (!generator) {
      return
    }
    if (generator?.preview) {
      return generator.preview({ options, field, base })
    }
    return generator.generate({ options, field, base })
  }

  /**
   * Generates a random value for a given generator configuration
   */
  const generate = async ({
    id,
    options,
    field,
    base,
  }: {
    id: string
    options: any
    field: Field
    base: Base
  }): Promise<any> => {
    const generator = getGenerator(id)
    if (!generator) {
      return
    }
    return await generator.generate({ options, field, base })
  }

  return {
    getGenerators,
    getGeneratorsForType,
    getGenerator,
    previewGenerator,
    generate,
  }
}

export default useRandomGenerator
