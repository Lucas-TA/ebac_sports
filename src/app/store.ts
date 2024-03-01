import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from '../features/favorites/favoritesSlice'
import cartReducer from '../features/cart/cartSlice'
import productReducer from '../features/product/productSlice'

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    cart: cartReducer,
    product: productReducer
  }
})
