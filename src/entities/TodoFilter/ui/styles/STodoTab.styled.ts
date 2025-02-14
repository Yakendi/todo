import styled from "styled-components";
import theme from "../../../../constants/constants.styles";

const STodoTab = styled.li<{isActive: boolean}>`
    display: flex;
    column-gap: 5px;
    padding: 10px;
    border-radius: 3px;
    background-color: ${props => props.isActive ? theme.colors.primaryWhite : "transparent"};
    transition: all 0.2s ease;
    cursor: pointer;
`

export default STodoTab;