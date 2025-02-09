import styled from "styled-components";
import theme from "../../../../constants/constants.styles";

const STasksCounter = styled.p<{isActive: boolean}>`
    color: ${props => props.isActive ? theme.colors.primaryBlack : theme.colors.primaryWhite};
`

export default STasksCounter;