import styled from "styled-components";
import theme from "../../../../constants/constants.styles";


const SEditTaskForm = styled.form`
    display: flex;
    align-items: center;
    column-gap: 10px;
    padding: 0.75rem 1rem;
    background-color: ${theme.colors.primaryWhite};
    border-radius: 3px;
`

export default SEditTaskForm;