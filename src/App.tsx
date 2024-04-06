import { ThemeProvider } from 'styled-components'
import { GlobalStyled } from './styles/global'
import { defaulTheme } from './styles/theme/default'

function App() {
  return (
    <ThemeProvider theme={defaulTheme}>
      <GlobalStyled />
    </ThemeProvider>
  )
}

export default App
