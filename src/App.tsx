import { ThemeProvider } from 'styled-components'
import { GlobalStyled } from './styles/global'
import { defaulTheme } from './styles/theme/default'
import { CartContextProvider } from './context/CartProvider'
import { Header } from './components/Header'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <ThemeProvider theme={defaulTheme}>
      <GlobalStyled />

      <CartContextProvider>
        <Header />
        <Outlet />
      </CartContextProvider>
    </ThemeProvider>
  )
}

export default App
