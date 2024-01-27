import { MantineProvider } from '@mantine/core'
import { theme } from '../../utils/theme'

const CustomThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider theme={theme}>
      {children}
    </MantineProvider>
  )
}

export default CustomThemeProvider