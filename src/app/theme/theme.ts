import { createTheme } from '@mui/material/styles'

/** MUI theme aligned with Angular Material azure-blue enterprise look */
export const appTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#0288d1',
    },
  },
  typography: {
    fontFamily: 'Roboto, "Helvetica Neue", Arial, sans-serif',
  },
})
