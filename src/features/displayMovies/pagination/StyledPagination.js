import styled, { css } from "styled-components"

export const StyledPagination = styled.div`
  margin: 20px auto 10px auto;
  display: flex;
  height: 50px;
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  @media (max-width: 414px) {
    height: 70px;
    justify-content: center;
  }
  .options {
    display: flex;
    align-items: center;
  }

  .buttons {
    @media (max-width: 414px) {
      margin-top: 5px;
    }
  }
`

export const StyledOption = styled.div`
  width: 25px;
  height: 25px;
  margin: 0 5px 0;
  cursor: pointer;
  background: ${({ theme }) => theme.lightGrey};
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ selected, theme }) => css`
    background: ${selected && theme.darkenGrey};
  `}

  &:hover {
    background: ${({ theme }) => theme.mediumGrey};
    transiton: ${({ theme }) => theme.transition};
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`
