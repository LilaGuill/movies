import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { deleteMovie, selectMovies } from "./moviesSlice"

const Movies = () => {
  const movies = useSelector(selectMovies)
  const dispatch = useDispatch()

  const moviesDetails = movies.map(
    ({ id, title, category, likes, dislikes }) => {
      return (
        <div key={id}>
          <div>{title}</div>
          <div>{category}</div>
          <div>{likes}</div>
          <div>{dislikes}</div>
          <button onClick={() => dispatch(deleteMovie(id))}>Delete</button>
        </div>
      )
    }
  )

  return <div>{moviesDetails}</div>
}

export default Movies
