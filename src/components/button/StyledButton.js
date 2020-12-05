import styled, { css } from "styled-components"

const StyledButton = styled.button`
  color: white;
  ${({ type, theme }) =>
    css`
      background-color: ${type === "remove" && theme.redColor};
    `}
`
export default StyledButton
