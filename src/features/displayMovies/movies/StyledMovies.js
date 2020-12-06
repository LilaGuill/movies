import styled from "styled-components"

const StyledMovies = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 70vh;
  margin: 0 auto;
  background: #f6f9fb;
  border-radius: ${({ theme }) => theme.borderRadius};
`
export default StyledMovies
