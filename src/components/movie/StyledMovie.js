import styled from "styled-components"

const StyledMovie = styled.div`
  width: 300px;
  height: 200px;
  background: white;
  margin: 20px;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
`
export default StyledMovie
