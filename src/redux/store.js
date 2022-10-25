import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './slices/searchSlice'
import categoryReducer from './slices/categorySlice'
import sortReducer from './slices/sortSlice'

export const store = configureStore({
  reducer: {
    search: searchReducer,
    category: categoryReducer,
    sort: sortReducer,
  },
})