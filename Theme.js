import { ThemeProvider } from 'styled-components'
import Header from './components/Header/Header'

const theme = {
  colors: {
    red: '#E63946',
    blue: '#1D3557',
    gray: '#7D7D7D',
    lightGray: '#F1FAEE',
    lightGreen: '#A8DADC',
    lightBlue: '#457B9D',
    white: '#FFFFFF',
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Header />
    {children}
  </ThemeProvider>
)

export default Theme
