import React from "react"
import { useSelector } from "react-redux"
import { selectMovies } from "./moviesSlice"
import Movie from "../movie/Movie"
import StyledMovies from "./StyledMovies"

const Movies = () => {
  const movies = useSelector(selectMovies)

  return (
    <StyledMovies>
      {movies.map(({ id, title, category, likes, dislikes }, index) => {
        return (
          <div key={id} className="movie-card">
            <Movie
              title={title}
              category={category}
              likes={likes}
              dislikes={dislikes}
              index={index}
            ></Movie>
          </div>
        )
      })}
    </StyledMovies>
  )
}

export default Movies
