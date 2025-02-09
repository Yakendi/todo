import styled from "styled-components";
import theme from "../../../../constants/constants.styles";

export const SCheckboxWrapper = styled.label`
  display: flex;
`;

export const SInput = styled.input`
  display: none;
`;

export const SCustomCheckbox = styled.span<{ checked: boolean }>`
  width: 18px;
  height: 18px;
  border: 2px solid ${theme.colors.primaryBlack};
  border-radius: 4px;
  position: relative;
  background-color: ${props => props.checked ? theme.colors.primaryBlack : "transparent"};
  transition: background-color 0.2s;

  &::after {
    content: "";
    position: absolute;
    top: 40%;
    left: 50%;
    width: 6px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: translate(-50%, -50%) rotate(45deg);
    opacity: ${props => props.checked ? 1 : 0};
    transition: opacity 0.2s;
  }
`;