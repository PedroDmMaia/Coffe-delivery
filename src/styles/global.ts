import { createGlobalStyle } from 'styled-components'
import { mixins } from './mixins'

export const GlobalStyled = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
      background: ${(props) => props.theme.background};
      color: ${(props) => props.theme['base-text']};
      --webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
      ${mixins.fonts.textM};
    }

    button {
      border: none;
      cursor: pointer;
    }
`
