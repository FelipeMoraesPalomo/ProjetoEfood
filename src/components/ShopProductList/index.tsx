import ShopProduct from '../ShopProduct'
import * as S from './styles'

import ProductModel from '../../Models/ProductModel'

type Props = {
  ShopProducts: ProductModel
}

const ShopProductList = ({ ShopProducts }: Props) => {
  return (
    <S.ShopSection>
      <S.ListDiv className="container">
        {ShopProducts.cardapio.map((Product) => (
          <ShopProduct key={Product.id} shopProduct={Product} />
        ))}
      </S.ListDiv>
    </S.ShopSection>
  )
}

export default ShopProductList
