import styled from "styled-components";
import theme from "../../../../constants/constants.styles";

const SAddTaskButton = styled.button<{isDisabled: boolean}>`
  width: 25%;
  background: ${props => props.isDisabled ? "#50585D" : theme.colors.primaryWhite};
  color: ${theme.colors.primaryBlack};
  border: none;
  padding: 0.55rem;
  cursor: ${props => props.isDisabled ? "not-allowed" : "cursor"};
  transition: all 0.2s ease;
`

export default SAddTaskButton;