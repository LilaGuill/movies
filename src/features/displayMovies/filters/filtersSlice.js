import { createSlice } from "@reduxjs/toolkit"

export const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    value: [],
  },
  reducers: {
    updateFilters: (state, action) => {
      state.value = action.payload.map(({ value }) => value)
    },
  },
})

export const { updateFilters } = filtersSlice.actions

export const selectFilters = (state) => state.filters.value

export default filtersSlice.reducer
