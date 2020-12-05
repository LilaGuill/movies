import React, { useEffect, useState } from "react"
import Select from "react-select"
import { useDispatch } from "react-redux"
import { updateFilters } from "./filtersSlice"

const Filters = ({ movies }) => {
  const [options, setOptions] = useState([])
  const dispatch = useDispatch()

  const handleChange = (event) => dispatch(updateFilters(event || []))

  useEffect(() => {
    // filtre les catégories disponibles du state à l'affichage du composant
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
    <div style={{ width: "400px" }}>
      <Select options={options} isMulti onChange={handleChange} />
    </div>
  )
}

export default Filters
