import styled from "styled-components"

export const StyledMovies = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 70vh;
  background: ${({ theme }) => theme.color.grey.blue};

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`
