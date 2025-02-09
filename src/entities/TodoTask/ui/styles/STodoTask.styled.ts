import styled from "styled-components";
import theme from "../../../../constants/constants.styles";

const STodoTask = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
  align-items: center;
  background-color: ${theme.colors.primaryWhite};
  color: ${theme.colors.primaryBlack};
  padding: 0.75rem 1rem;
  border-radius: 3px;
`

const SFiller = styled.div`
    flex-grow: 1;
`

export { STodoTask, SFiller };