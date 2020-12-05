import styled from "styled-components"

const StyledMovies = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  .movie-card {
    width: 300px;
    height: 200px;
    background: white;
    margin: 20px;
    padding: 20px;
    box-sizing: border-box;
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: ${({ theme }) => theme.boxShadow};
  }
`
export default StyledMovies
