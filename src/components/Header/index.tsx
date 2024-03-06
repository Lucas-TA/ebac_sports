import * as S from './styles'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

import cesta from '../../assets/cesta.png'

const Header = () => {
  const favorites = useSelector((state: RootState) => state.favorites.itens)
  const cart = useSelector((state: RootState) => state.cart.itens)
  const valorTotal = cart.reduce((acc, item) => acc + item.preco, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favorites.length} favoritos</span>
        <img src={cesta} alt="cart" />
        <span>
          {cart.length} itens, valor total:{' '}
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
