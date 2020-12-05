import styled from "styled-components"

const StyledProgress = styled.progress`
  width: 50px;
  appearance: none;

  ::-webkit-progress-bar {
    height: 10px;
    border-radius: 20px;
    background: pink;
  }

  ::-webkit-progress-value {
    height: 10px;
    border-radius: 20px;
    background: yellow;
  }
`
export default StyledProgress
