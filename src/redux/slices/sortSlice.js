import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentPage: 1,
  value: { name: "популярности", query: "rating", order: "desc" },
}

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSelectedSort: (state, action) => {
      state.value = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    }
  },
})

export const { setSelectedSort, setCurrentPage } = sortSlice.actions

export default sortSlice.reducer