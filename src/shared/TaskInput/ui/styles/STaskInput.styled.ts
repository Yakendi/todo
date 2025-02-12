import styled from "styled-components";
import theme from "../../../../constants/constants.styles";

const STaskInput = styled.input`
  /* width: 75%; */
  outline: none;
  background: ${theme.colors.primaryBlack};
  border: 1px solid ${theme.colors.primaryWhite};
  padding: 0.5rem 1rem;
  color: ${theme.colors.primaryWhite};
`

export default STaskInput;