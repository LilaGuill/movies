import React from "react"
import { StyledButton } from "./StyledButton"

const Button = ({ type, handleClick, children }) => {
  return (
    <StyledButton type={type} onClick={handleClick}>
      {children}
    </StyledButton>
  )
}

export default Button
