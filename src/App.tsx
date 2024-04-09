import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'

import { GlobalStyled } from './styles/global'
import { defaulTheme } from './styles/theme/default'

function App() {
  return (
    <ThemeProvider theme={defaulTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyled />
    </ThemeProvider>
  )
}

export default App
