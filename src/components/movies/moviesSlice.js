import { createSlice, current } from "@reduxjs/toolkit"
import moviesList from "../../data/movies"

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    value: moviesList,
  },
  reducers: {
    like: (state, action) => {
      state.value[action.payload.index].likes += 1
    },
    dislike: (state, action) => {
      state.value[action.payload.index].dislikes -= 1
    },
    removeMovie: (state, action) => {
      const indexToRemove = state.value.findIndex(
        ({ id }) => action.payload.id === id
      )

      state.value.splice(indexToRemove, 1)
    },
  },
})

export const { removeMovie, like, dislike } = moviesSlice.actions

export const selectMovies = (state) => state.movies.value

export default moviesSlice.reducer
