import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCheckedCategory: (state, action) => {
      state.value = action.payload;
    },
  },
})

export const { setCheckedCategory } = categorySlice.actions

export default categorySlice.reducer