import React from 'react'
import { Produto } from '../../App'
import * as S from './styles'

interface Props {
  produto: Produto
  estaNosFavoritos: boolean
  favoritar: (produto: Produto) => void
  aoComprar: (produto: Produto) => void
}

const ProdutoComponent = ({
  produto,
  estaNosFavoritos,
  favoritar,
  aoComprar
}: Props) => {
  const precoFormatado = produto.preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{precoFormatado}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => favoritar(produto)} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => aoComprar(produto)} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
