import styled from 'styled-components'
import theme from '../../constants/constants.styles'

export const SApp = styled.div`
  height: 100%;
  min-height: 100vh;
  align-items: center;
  display: flex;
  padding: 40px 20px;
  flex-direction: column;
  background-color: ${theme.colors.primaryWhite};
`