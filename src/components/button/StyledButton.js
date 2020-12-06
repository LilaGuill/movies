import styled, { css } from "styled-components"

const StyledButton = styled.button`
  color: white;
  border-width: 1px;
  border-style: solid;
  opacity: 0.7;
  font-weight: bold;
  border-radius: ${({ theme }) => theme.border.radius.large};

  ${({ type, theme }) =>
    css`
      background: ${type === "remove" ? theme.color.red : theme.color.primary};
    `}
  &:hover {
    cursor: pointer;
    opacity: 1;
    transiton: ${({ theme }) => theme.transition};
    box-shadow: ${({ theme }) => theme.box.shadow.darken};
  }
`
export default StyledButton
