import React, { useState } from "react"
import { useSelector } from "react-redux"
import { selectMovies } from "./moviesSlice"
import { selectFilters } from "../filters/filtersSlice"
import Movie from "../movie/Movie"
import StyledMovies from "./StyledMovies"
import SelectField from "../filters/Filters"
import Pagination from "../pagination/pagination"

const Movies = () => {
  const movies = useSelector(selectMovies)
  const filters = useSelector(selectFilters)
  const [firstItem, setFirstItem] = useState(1)
  const [lastItem, setLastItem] = useState(12)

  const moviesFiltered = movies.filter(({ category }) =>
    filters.length ? filters.includes(category) : true
  )

  const moviesList = moviesFiltered
    .filter((_, index) => index >= firstItem - 1 && index <= lastItem - 1)
    .map((movie) => <Movie {...movie} key={movie.id} />)

  return (
    <>
      <SelectField movies={movies} />
      <Pagination
        moviesLength={moviesFiltered.length}
        firstItem={firstItem}
        setFirstItem={setFirstItem}
        lastItem={lastItem}
        setLastItem={setLastItem}
      />
      <StyledMovies>{moviesList}</StyledMovies>
    </>
  )
}

export default Movies
