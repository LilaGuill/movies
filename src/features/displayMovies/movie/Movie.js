import React, { useState } from "react"
import { useDispatch } from "react-redux"
import {
  removeMovie,
  incrementLike,
  decrementLike,
  incrementDislike,
  decrementDislike,
} from "../movies/moviesSlice"
import Button from "../../../components/button/Button"
import Category from "../../../components/category/Category"
import ProgressBar from "../../../components/progressBar/ProgressBar"
import Title from "../../../components/title/Title"
import { StyledMovie, StyledThumb } from "./StyledMovie"

const Movie = ({ id, title, category, likes, dislikes }) => {
  const [isLiked, setIsLiked] = useState(false)
  const [isDisliked, setIsDisliked] = useState(false)
  const dispatch = useDispatch()
  const handleRemoveMovie = (id) => dispatch(removeMovie({ id }))

  const handleLike = (id) => {
    if (!isLiked) {
      setIsLiked(true)
      dispatch(incrementLike({ id }))
    } else if (isLiked) {
      setIsLiked(false)
      dispatch(decrementLike({ id }))
    }
    if (isDisliked) {
      setIsDisliked(false)
      dispatch(decrementDislike({ id }))
    }
  }
  const handleDislike = (id) => {
    if (!isDisliked) {
      setIsDisliked(true)
      dispatch(incrementDislike({ id }))
    } else if (isDisliked) {
      setIsDisliked(false)
      dispatch(decrementDislike({ id }))
    }
    if (isLiked) {
      setIsLiked(false)
      dispatch(decrementLike({ id }))
    }
  }
  return (
    <StyledMovie>
      <div className="content">
        <div className="description">
          <Title title={title} />
          <Category category={category} />
        </div>
        <div className="like">
          <div className="thumbs">
            <StyledThumb onClick={() => handleLike(id)} Selected={isLiked}>
              <span>👍</span> {likes.toLocaleString()}
            </StyledThumb>
            <StyledThumb
              onClick={() => handleDislike(id)}
              selected={isDisliked}
            >
              <span className="has-small-margin-top">👎</span>
              {dislikes.toLocaleString()}
            </StyledThumb>
          </div>
          <ProgressBar likes={likes} dislikes={dislikes} />
        </div>
      </div>
      <div className="card-action">
        <Button handleClick={() => handleRemoveMovie(id)} type="remove">
          Remove
        </Button>
      </div>
    </StyledMovie>
  )
}

export default Movie
