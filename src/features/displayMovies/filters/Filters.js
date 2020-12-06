import React, { useEffect, useState, useMemo } from "react"
import Select from "react-select"
import { useDispatch } from "react-redux"
import { updateFilters } from "./filtersSlice"
import StyledFilters from "./StyledFilters"

const Filters = ({ movies }) => {
  const [options, setOptions] = useState([])
  const dispatch = useDispatch()

  const handleChange = (event) => dispatch(updateFilters(event || []))

  useEffect(() => {
    const categories = movies.reduce((acc, { category }) => {
      const isDuplicate = acc.find(({ value }) => value === category)
      if (!isDuplicate) {
        acc.push({ value: category, label: category })
      }
      return acc
    }, [])
    setOptions(categories)
  }, [movies])

  return (
    <StyledFilters>
      <Select
        options={options}
        isMulti
        onChange={handleChange}
        placeholder="Select a category"
      />
    </StyledFilters>
  )
}

export default Filters
