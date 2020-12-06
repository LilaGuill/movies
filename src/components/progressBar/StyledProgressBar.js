import styled from "styled-components"

export const StyledProgress = styled.progress`
  width: 50px;
  appearance: none;
  height: 10px;

  ::-webkit-progress-bar {
    border-radius: ${({ theme }) => theme.border.radius.large};
    background: ${({ theme }) => theme.color.grey.medium};
  }

  ::-webkit-progress-value {
    border-radius: ${({ theme }) => theme.border.radius.large};
    background: ${({ theme }) => theme.color.secondary};
  }
`
