import React from "react"
import { useSelector } from "react-redux"
import { selectMovies, removeMovie } from "./moviesSlice"
import { selectFilters } from "../filters/filtersSlice"
import Movie from "../movie/Movie"
import StyledMovies from "./StyledMovies"
import SelectField from "../filters/Filters"

const Movies = () => {
  const movies = useSelector(selectMovies)
  const filters = useSelector(selectFilters)

  const moviesList = movies
    .filter(({ category }) =>
      filters.length ? filters.includes(category) : true
    )
    .map((movie) => {
      return (
        //remove div
        <div key={movie.id} className="movie-card">
          <Movie {...movie} removeMovie={removeMovie} />
        </div>
      )
    })

  return (
    <>
      <SelectField movies={movies} />
      <StyledMovies>{moviesList}</StyledMovies>
    </>
  )
}

export default Movies
