import styled from "styled-components";
import theme from "../../../../constants/constants.styles";

const STodosWidget = styled.div`
    width: 70%;
    max-width: 600px;
    min-width: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
    padding: 30px 40px;
    background-color: ${theme.colors.primaryBlack};
    border-radius: 8px;
`

export default STodosWidget;