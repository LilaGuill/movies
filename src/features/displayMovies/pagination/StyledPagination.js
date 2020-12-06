import styled from "styled-components"

export const StyledPagination = styled.div`
  margin: 20px auto 10px auto;
  display: flex;
  height: 50px;
  width: 90%;
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
  background: ${({ theme, selected }) =>
    selected ? theme.color.grey.darken : theme.color.grey.light};
  border-radius: ${({ theme }) => theme.border.radius.small};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ theme }) => theme.color.grey.medium};
    transiton: ${({ theme }) => theme.transition};
    box-shadow: ${({ theme }) => theme.box.shadow.darken};
  }
`
