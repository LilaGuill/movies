import { configureStore } from "@reduxjs/toolkit"
import moviesReducer from "../features/displayMovies/movies/moviesSlice"
import filtersReducer from "../features/displayMovies/filters/filtersSlice"

export default configureStore({
  reducer: {
    movies: moviesReducer,
    filters: filtersReducer,
  },
})
