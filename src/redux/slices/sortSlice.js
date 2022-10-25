import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: { name: "популярности", query: "rating", order: "desc" },
}

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSelectedSort: (state, action) => {
      state.value = action.payload;
    },
  },
})

export const { setSelectedSort } = sortSlice.actions

export default sortSlice.reducer