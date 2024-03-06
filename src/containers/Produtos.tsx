import { useDispatch, useSelector } from 'react-redux'
import { adicionarAoCarrinho } from '../redux/slices/cartSlice'
import {
  adicionarFavorito,
  removerFavorito
} from '../redux/slices/favoritesSlice'
import { useGetProdutosQuery } from '../redux/api/api'
import ProdutoComponent from '../components/Produto'
import * as S from './styles'
import { Produto } from '../App'
import { RootState } from '../redux/store'

const ProdutosComponent = () => {
  const dispatch = useDispatch()
  const { data: produtos, error, isLoading } = useGetProdutosQuery()
  const favorites = useSelector((state: RootState) => state.favorites.itens)

  const handleAoComprar = (produto: Produto) => {
    dispatch(adicionarAoCarrinho(produto))
  }

  const handleFavoritar = (produto: Produto) => {
    const estaNosFavoritos = favorites.some(
      (favorito) => favorito.id === produto.id
    )
    if (estaNosFavoritos) {
      dispatch(removerFavorito(produto.id))
    } else {
      dispatch(adicionarFavorito(produto))
    }
  }

  if (isLoading) return <div>Loading...</div>
  if (error) {
    if ('status' in error) {
      console.error(`Erro de status ${error.status}:`, error.data)
    } else {
      console.error('Erro:', error.message)
    }
    return <div>Error</div>
  }

  return (
    <S.Produtos>
      {produtos?.map((produto: Produto) => (
        <ProdutoComponent
          key={produto.id}
          produto={produto}
          estaNosFavoritos={favorites.some(
            (favorito) => favorito.id === produto.id
          )}
          favoritar={handleFavoritar}
          aoComprar={handleAoComprar}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
