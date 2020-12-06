import styled from "styled-components"

const StyledProgress = styled.progress`
  margin-top: 6px;
  width: 50px;
  appearance: none;

  ::-webkit-progress-bar {
    height: 10px;
    border-radius: ${({ theme }) => theme.border.radius.large};
    background: ${({ theme }) => theme.color.grey.medium};
  }

  ::-webkit-progress-value {
    height: 10px;
    border-radius: ${({ theme }) => theme.border.radius.large};
    background: ${({ theme }) => theme.color.secondary};
  }
`
export default StyledProgress
