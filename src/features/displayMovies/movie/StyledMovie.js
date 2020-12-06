import styled from "styled-components"

export const StyledMovie = styled.div`
  width: 250px;
  height: 250px;
  background: white;
  margin: 20px;
  padding: 20px 20px 0 20px;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.border.radius.large};
  box-shadow: ${({ theme }) => theme.box.shadow.lighten};

  h5 {
    color: ${({ theme }) => theme.color.secondary};
  }

  .card-header {
    height: 75%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${({ theme }) => theme.border.color};
  }

  .titles {
    height: 70%;
    background: ${({ theme }) => theme.color.grey.blue};
    border-radius: ${({ theme }) => theme.border.radius.large};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    box-sizing: content-box;
  }

  .reactions {
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .thumbs {
    display: flex;
  }

  .card-footer {
    height: 25%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }
`
export const StyledThumb = styled.div`
  padding: 0 10px;
  gap: 5px;
  height: 30px;
  border-radius: ${({ theme }) => theme.border.radius.large};
  background: ${({ theme, selected }) =>
    selected ? theme.color.grey.darken : theme.color.grey.light};
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.color.grey.medium};
  }

  .has-small-margin-top {
    margin-top: 6px;
  }
`
