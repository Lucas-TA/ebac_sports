import { createSlice } from '@reduxjs/toolkit'
export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    counter: 0
  },
  reducers: {
    addFavorite: (state) => {
      state.counter += 1
    },
    removeFavorite: (state) => {
      state.counter -= 1
    }
  }
})
export const { addFavorite, removeFavorite } = favoritesSlice.actions
export default favoritesSlice.reducer
