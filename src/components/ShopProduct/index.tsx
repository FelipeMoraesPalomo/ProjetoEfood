import Button from '../Button'
import * as S from './styles'

import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'
import ShopProductModel from '../../Models/ShopProductModel'

type Props = {
  shopProduct: ShopProductModel
  onClick?: () => void
}

const ShopProduct = ({ shopProduct, onClick }: Props) => {
  const dispatch = useDispatch()

  const addProductToCart = () => {
    dispatch(add(shopProduct))
    dispatch(open())
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 140) {
      return descricao.slice(0, 137) + '...'
    }
    return descricao
  }

  return (
    <S.ShopProductDiv onClick={onClick}>
      <img src={shopProduct.foto} alt={shopProduct.nome} />
      <S.TextDiv>
        <h3>{shopProduct.nome}</h3>
        <p>{getDescricao(shopProduct.descricao)}</p>
        <Button
          onClick={addProductToCart}
          title="Adicionar ao carrinho"
          type="button"
        >
          Adicionar ao carrinho
        </Button>
      </S.TextDiv>
    </S.ShopProductDiv>
  )
}

export default ShopProduct
