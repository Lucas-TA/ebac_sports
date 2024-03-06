import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

interface FavoritesState {
  itens: Produto[]
}

const initialState: FavoritesState = {
  itens: []
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    adicionarFavorito(state, action: PayloadAction<Produto>) {
      state.itens.push(action.payload)
    },
    removerFavorito(state, action: PayloadAction<number>) {
      state.itens = state.itens.filter(
        (produto) => produto.id !== action.payload
      )
    }
  }
})
export const { adicionarFavorito, removerFavorito } = favoritesSlice.actions
export default favoritesSlice.reducer
