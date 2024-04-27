import React, { useState, useEffect } from 'react'
import {
  Box,
  Button,
  Dialog,
  Text,
  TextButton,
  useGlobalConfig,
} from '@airtable/blocks/ui'
import TableSelect from './table-select'
import ConfigureFields from './configure-fields'
import NumberOfRecords from './number-of-records'
import GenerateRecords from './generate'

/**
 * The main form for generating records. This form holds state for child
 * components and checks if the user has permission to create records in
 * the selected table.
 */
const RandomRecordForm: React.FC = () => {
  const [didSaveSettings, setDidSaveSettings] = useState(false)
  const [table, setTable] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [numberOfRecords, setNumberOfRecords] = useState(10)
  const [userHasTablePermission, setUserHasTablePermission] = useState(false)
  const [fieldConfigurations, setFieldConfigurations] = useState<
    FieldConfiguration[]
  >([])
  const globalConfig = useGlobalConfig()
  const savedSettings: any = globalConfig.get('savedSettings') || []

  /**
   * Save the current form state to the global config. This will allow the user
   * to return to the form and continue where they left off.
   */
  const saveSettings = async () => {
    const newSettings: SavedSettings[] = savedSettings.filter(
      (setting) => setting.tableId !== table.id
    )
    newSettings.push({
      tableId: table.id,
      numberOfRecords,
      fieldConfigurations,
    })
    // Convert from field objects to field IDs for storing in settings.
    await globalConfig.setAsync(
      'savedSettings',
      newSettings.map((setting) => ({
        ...setting,
        fieldConfigurations: setting.fieldConfigurations.map(
          (fieldConfiguration) => ({
            ...fieldConfiguration,
            field: fieldConfiguration.field.id,
          })
        ),
      }))
    )
  }

  /**
   * When any form state changes, change the save settings button back to its
   * original state.
   */

  useEffect(() => {
    setDidSaveSettings(false)
  }, [table, numberOfRecords, fieldConfigurations])

  /**
   * When the table is set, check if the user has permission to create records in the table.
   * Also reset the field configuration.
   */
  useEffect(() => {
    if (table) {
      setUserHasTablePermission(table.hasPermissionToCreateRecord())
      setFieldConfigurations(table.fields.map((field: any) => ({ field })))
      const savedTableSettings = savedSettings.find(
        (setting) => setting.tableId === table.id
      )
      if (savedTableSettings) {
        setNumberOfRecords(savedTableSettings.numberOfRecords)
        setFieldConfigurations(
          savedTableSettings.fieldConfigurations.map((setting) => ({
            ...setting,
            field: table.getFieldByIdIfExists(setting.field),
          }))
        )
      }
    }
  }, [table])

  return (
    <>
      {isGenerating && (
        <Dialog onClose={() => {}}>
          <GenerateRecords
            table={table}
            numberOfRecords={numberOfRecords}
            fieldConfigurations={fieldConfigurations}
            done={() => setIsGenerating(false)}
          />
        </Dialog>
      )}
      <Box
        display="flex"
        marginBottom={2}
        paddingBottom={2}
        borderBottom="thick"
      >
        <Box flex={1} paddingRight={1}>
          <TableSelect
            table={table}
            setTable={setTable}
            permissionError={table && !userHasTablePermission}
          />
        </Box>
        <Box flex={1} paddingLeft={1}>
          <NumberOfRecords
            numberOfRecords={numberOfRecords}
            setNumberOfRecords={setNumberOfRecords}
          />
        </Box>
      </Box>
      {table && userHasTablePermission && (
        <>
          {savedSettings.find((setting) => setting.tableId === table.id) && (
            <Box>
              <Text variant="paragraph">
                Loaded saved settings for this table.{' '}
                <TextButton
                  onClick={() => {
                    globalConfig.setAsync(
                      'savedSettings',
                      savedSettings.filter(
                        (setting) => setting.tableId !== table.id
                      )
                    )
                    setFieldConfigurations(
                      table.fields.map((field: any) => ({ field }))
                    )
                  }}
                >
                  Clear saved settings
                </TextButton>
              </Text>
            </Box>
          )}
          <ConfigureFields
            fieldConfigurations={fieldConfigurations}
            setFieldConfigurations={setFieldConfigurations}
          />
          <Box
            marginTop={4}
            paddingTop={2}
            borderTop="thick"
            display="flex"
            justifyContent="space-between"
          >
            <Button
              variant="primary"
              disabled={
                !fieldConfigurations.some(
                  (fieldConfiguration) => fieldConfiguration.generator
                )
              }
              onClick={() => setIsGenerating(true)}
            >
              Generate random records
            </Button>
            <Button
              variant="secondary"
              onClick={() => {
                saveSettings()
                setDidSaveSettings(true)
              }}
            >
              {didSaveSettings ? <>Settings saved</> : <>Save settings</>}
            </Button>
          </Box>
        </>
      )}
    </>
  )
}

export default RandomRecordForm
