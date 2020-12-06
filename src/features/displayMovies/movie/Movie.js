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
import ProgressBar from "../../../components/progressBar/ProgressBar"
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
    } else {
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
    } else {
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
      <div className="card-header">
        <div className="titles">
          <h2>{title}</h2>
          <h5>{category}</h5>
        </div>
        <div className="reactions">
          <div className="thumbs">
            <StyledThumb onClick={() => handleLike(id)} selected={isLiked}>
              <span role="img" aria-label="like">
                👍
              </span>
              {likes.toLocaleString()}
            </StyledThumb>
            <StyledThumb
              onClick={() => handleDislike(id)}
              selected={isDisliked}
            >
              <span
                role="img"
                aria-label="dislike"
                className="has-small-margin-top"
              >
                👎
              </span>
              {dislikes.toLocaleString()}
            </StyledThumb>
          </div>
          <ProgressBar likes={likes} dislikes={dislikes} />
        </div>
      </div>
      <div className="card-footer">
        <Button handleClick={() => handleRemoveMovie(id)} type="remove">
          Remove
        </Button>
      </div>
    </StyledMovie>
  )
}

export default Movie
