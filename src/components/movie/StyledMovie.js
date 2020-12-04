import styled from "styled-components"

const StyledMovie = styled.div`
  width: 300px;
  height: 200px;
  background: white;
  margin: 20px;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadow};
`
export default StyledMovie
