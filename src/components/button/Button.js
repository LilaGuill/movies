import React from "react"
import StyledButton from "./StyledButton"

const Button = ({ type, handleRemoveMovie, children }) => {
  return (
    <StyledButton type="remove" onClick={() => handleRemoveMovie()}>
      {children}
    </StyledButton>
  )
}

export default Button
