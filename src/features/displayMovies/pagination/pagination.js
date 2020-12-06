import React, { useState } from "react"
import Button from "../../../components/button/Button"
import { StyledPagination, StyledOption } from "./StyledPagination"

const options = [4, 8, 12]

const Pagination = ({
  moviesLength,
  setFirstItem,
  firstItem,
  setLastItem,
  lastItem,
}) => {
  const [itemsPerPage, setItemsPerPage] = useState(12)

  const handleNext = () => {
    if (lastItem < moviesLength) {
      setFirstItem(firstItem + itemsPerPage)
      setLastItem(lastItem + itemsPerPage)
    }
  }

  const handlePrevious = () => {
    if (firstItem > 1) {
      setFirstItem(firstItem - itemsPerPage)
      setLastItem(lastItem - itemsPerPage)
    }
  }

  const handleItemsPerPage = (value) => {
    setFirstItem(1)
    setItemsPerPage(value)
    setLastItem(value)
  }

  return (
    <StyledPagination>
      <div className="options">
        <div>Items per page : </div>
        {options.map((option) => (
          <StyledOption
            selected={option === itemsPerPage}
            key={option}
            onClick={() => handleItemsPerPage(option)}
          >
            {option}
          </StyledOption>
        ))}
      </div>
      <div className="buttons">
        <Button handleClick={handlePrevious}>Previous</Button>
        <Button handleClick={handleNext}>Next</Button>
      </div>
    </StyledPagination>
  )
}

export default Pagination
