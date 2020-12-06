import { createSlice } from "@reduxjs/toolkit"
import moviesList from "../../../data/movies"

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    value: moviesList,
  },
  reducers: {
    incrementLike: (state, action) => {
      const index = state.value.findIndex(({ id }) => action.payload.id === id)
      state.value[index].likes += 1
    },
    decrementLike: (state, action) => {
      const index = state.value.findIndex(({ id }) => action.payload.id === id)
      state.value[index].likes -= 1
    },
    incrementDislike: (state, action) => {
      const index = state.value.findIndex(({ id }) => action.payload.id === id)
      state.value[index].dislikes += 1
    },
    decrementDislike: (state, action) => {
      const index = state.value.findIndex(({ id }) => action.payload.id === id)
      state.value[index].dislikes -= 1
    },
    removeMovie: (state, action) => {
      const indexToRemove = state.value.findIndex(
        ({ id }) => action.payload.id === id
      )

      state.value.splice(indexToRemove, 1)
    },
  },
})

export const {
  removeMovie,
  incrementLike,
  decrementLike,
  incrementDislike,
  decrementDislike,
} = moviesSlice.actions

export const selectMovies = (state) => state.movies.value

export default moviesSlice.reducer
