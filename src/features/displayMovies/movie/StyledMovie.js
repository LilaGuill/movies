import styled, { css } from "styled-components"

export const StyledMovie = styled.div`
  width: 250px;
  height: 250px;
  background: white;
  margin: 20px;
  padding: 20px 20px 0 20px;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.border.radius.large};
  box-shadow: ${({ theme }) => theme.boxShadow};

  .content {
    height: 75%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-bottom: solid;
    border-width: 1px;
    border-color: ${({ theme }) => theme.border.color};
  }

  .description {
    height: 70%;
    width: 100%;
    background: ${({ theme }) => theme.blueGrey};
    border-radius: ${({ theme }) => theme.border.radius.large};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    box-sizing: content-box;
  }
  .like {
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .thumbs {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 30px;
  }

  .card-action {
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
  background: ${({ theme }) => theme.lightGrey};
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.mediumGrey};
  }
  ${({ selected, theme }) =>
    css`
      background: ${selected && theme.darkenGrey};
    `}

  .has-small-margin-top {
    margin-top: 6px;
  }
`
