import { configureStore } from "@reduxjs/toolkit"
import moviesReducer from "../components/movies/moviesSlice"

export default configureStore({
  reducer: {
    movies: moviesReducer,
  },
})
