import React from "react"
import { StyledProgress } from "./StyledProgressBar"

const ProgressBar = ({ likes, dislikes }) => {
  const value = (likes / (likes + dislikes)) * 100

  return <StyledProgress value={value} max={100} />
}

export default ProgressBar
