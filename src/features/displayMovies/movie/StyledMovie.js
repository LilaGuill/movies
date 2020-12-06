import styled from "styled-components"

const StyledMovie = styled.div`
  width: 250px;
  height: 250px;
  background: white;
  margin: 20px;
  padding: 20px 20px 0 20px;
  box-sizing: border-box;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};

  .content {
    height: 75%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    border-bottom: solid;
    border-width: 1px;
    border-color: #e3e3e3;
  }

  .description {
    height: 70%;
    width: 100%;
    background: #f6f9fb;
    border-radius: ${({ theme }) => theme.borderRadius};
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
  .thumb {
    padding: 0 10px;
    gap: 5px;
    height: 30px;
    border-radius: 25px;
    background: #f6f9fb;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:hover {
      background: #e4edf3;
    }
  }
  .thumb-selected {
    padding: 0 10px;
    gap: 5px;
    height: 30px;
    border-radius: 25px;
    background: #d3e1eb;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    cursor: pointer;
  }

  .has-small-margin-top {
    margin-top: 6px;
  }
  .card-action {
    height: 25%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
  }
`
export default StyledMovie
