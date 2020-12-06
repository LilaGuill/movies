import styled from "styled-components"

export const StyledFooter = styled.footer`
  height: 75px;
  display: grid;
  place-items: center;

  a {
    color: ${({ theme }) => theme.color.secondary};
    font-weight: bold;
  }
`
