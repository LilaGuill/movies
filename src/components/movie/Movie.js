import React from "react"
import { useDispatch } from "react-redux"
import Button from "../button/Button"
import Category from "../category/Category"
import ProgressBar from "../progressBar/ProgressBar"
import Title from "../title/Title"
import ToogleSwitch from "../toggleSwitch/ToggleSwitch"

const Movie = ({ id, title, category, likes, dislikes, removeMovie }) => {
  const dispatch = useDispatch()
  const handleRemoveMovie = (id) => dispatch(removeMovie({ id }))

  return (
    <>
      <Title title={title} />
      <Category category={category} />
      <div>{likes}</div>
      <div>{dislikes}</div>
      <ToogleSwitch id={id} />
      <ProgressBar likes={likes} dislikes={dislikes} />
      <div>
        <Button handleClick={() => handleRemoveMovie(id)} type="remove">
          Remove
        </Button>
      </div>
    </>
  )
}

export default Movie
