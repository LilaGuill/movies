import React from "react"
import { StyledFooter } from "./StyledFooter"

const Footer = () => {
  return (
    <StyledFooter>
      <span>
        Made with
        <a
          href="https://github.com/facebook/create-react-app"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;Create React App&nbsp;
        </a>
        using
        <a
          href="https://redux-toolkit.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;Redux Toolkit
        </a>
      </span>
    </StyledFooter>
  )
}

export default Footer
