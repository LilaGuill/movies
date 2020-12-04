import { createSlice, current } from "@reduxjs/toolkit"
import moviesList from "../../data/movies"

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    value: moviesList,
  },
  reducers: {
    deleteMovie: (state, action) => {
      state.value.splice(action.payload.index, 1)
    },
  },
})

export const { deleteMovie } = moviesSlice.actions

export const selectMovies = (state) => state.movies.value

export default moviesSlice.reducer
