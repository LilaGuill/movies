import { configureStore } from "@reduxjs/toolkit"
import moviesReducer from "../components/movies/moviesSlice"
import filtersReducer from "../components/filters/filtersSlice"

export default configureStore({
  reducer: {
    movies: moviesReducer,
    filters: filtersReducer,
  },
})
