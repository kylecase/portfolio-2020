import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: '4em',
      fontWeight: 700,
      color: '#404040',
    },
    h2: {
      fontWeight: 600,
      fontSize: '3em',
    },
    fontFamily: [
      'Source Sans Pro',
      'Oxygen',
      '-apple-system',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
    ].join(','),
  },
})

export default theme
