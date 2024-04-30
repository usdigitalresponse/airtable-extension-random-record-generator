import React from 'react'
import { Box, colors, colorUtils, Icon } from '@airtable/blocks/ui'

/**
 * An alerting component that can be used to display messages to the user.
 */
const Alert: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Box
    role="alert"
    marginY={2}
    backgroundColor={colors.GRAY_LIGHT_2}
    padding={2}
    textColor={colorUtils.getHexForColor(colors.RED_DARK_1)}
    display="flex"
    borderRadius="large"
    alignItems="center"
  >
    <Box flex={0} marginRight={3}>
      <Icon
        name="warning"
        size={16}
        fillColor={colorUtils.getHexForColor(colors.RED_DARK_1)}
      />
    </Box>
    <Box flex={1}>{children}</Box>
  </Box>
)

export default Alert
