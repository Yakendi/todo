import styled from "styled-components";
import theme from "../../../../constants/constants.styles";

const STaskTabButton = styled.button<{isActive: boolean}>`
    color: ${props => props.isActive ? theme.colors.primaryBlack : theme.colors.primaryWhite};
`

export default STaskTabButton;