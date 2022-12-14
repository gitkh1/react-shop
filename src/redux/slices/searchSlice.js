import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.value = action.payload;
    },
  },
})

export const { setSearchQuery } = searchSlice.actions

export default searchSlice.reducer