import { createSlice } from '@reduxjs/toolkit'
export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itens: []
  },
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload
      if (state.itens.find((p) => product.id === product.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(product)
      }
    }
  }
})
