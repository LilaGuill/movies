import React from "react"
import StyledMovie from "./StyledMovie"
import { useDispatch } from "react-redux"
import { deleteMovie } from "../movies/moviesSlice"
import Button from "../button/Button"
import Category from "../category/Category"
import Title from "../title/Title"

const Movie = ({ title, category, likes, dislikes, index }) => {
  const dispatch = useDispatch()

  const handleRemoveMovie = (index) => {
    dispatch(deleteMovie({ index }))
  }
  return (
    <>
      <Title title={title} />
      <Category category={category} />
      <div>{likes}</div>
      <div>{dislikes}</div>
      <Button handleRemoveMovie={() => handleRemoveMovie(index)} type="remove">
        Remove
      </Button>
    </>
  )
}

export default Movie
