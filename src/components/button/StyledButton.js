import styled, { css } from "styled-components"

export const StyledButton = styled.button`
  color: white;
  opacity: 0.8;
  font-weight: bold;
  border-radius: ${({ theme }) => theme.border.radius.large};
  margin-left: 5px;
  transition: ${({ theme }) => theme.transition};
  background: ${({ theme, type }) =>
    type === "remove" ? theme.color.red : theme.color.primary};

  &:hover {
    cursor: pointer;
    opacity: 1;
    box-shadow: ${({ theme }) => theme.box.shadow.darken};
  }
`
