import { createGlobalStyle } from 'styled-components'
import { reset } from './reset.styles'
import theme from '../../constants/constants.styles'

export default createGlobalStyle`
  ${reset}

  * {
    font-family: "Lexend", serif;
  }

  body {
  }

  h1 {
    color: ${theme.colors.primaryWhite};
    font-size: 1.75rem;
  }

  h2 {
    margin: 0 auto;
    font-size: 20px;
    color: ${theme.colors.primaryWhite};
  }
`
