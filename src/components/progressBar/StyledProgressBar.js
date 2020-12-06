import styled from "styled-components"

const StyledProgress = styled.progress`
  margin-top: 6px;
  width: 50px;
  appearance: none;

  ::-webkit-progress-bar {
    height: 10px;
    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.mediumGrey};
  }

  ::-webkit-progress-value {
    height: 10px;
    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.secondaryColor};
  }
`
export default StyledProgress
