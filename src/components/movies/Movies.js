import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { deleteMovie, selectMovies } from "./moviesSlice"
import Movie from "../movie/Movie"
import StyledMovies from "./StyledMovies"

const Movies = () => {
  const movies = useSelector(selectMovies)
  const dispatch = useDispatch()

  const moviesDetails = movies.map(
    ({ id, title, category, likes, dislikes }) => {
      return (
        <div key={id}>
          <Movie>
            <div>{title}</div>
            <div>{category}</div>
            <div>{likes}</div>
            <div>{dislikes}</div>
            <button onClick={() => dispatch(deleteMovie(id))}>Delete</button>
          </Movie>
        </div>
      )
    }
  )

  return <StyledMovies>{moviesDetails}</StyledMovies>
}

export default Movies
