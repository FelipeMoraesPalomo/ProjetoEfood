import ShopProductModel from '../../Models/ShopProductModel'
import ShopProduct from '../ShopProduct'
import * as S from './styles'

type Props = {
  ShopProducts: ShopProductModel[]
}

const ShopProductList = ({ ShopProducts }: Props) => (
  <S.ShopSection>
    <S.ListDiv className="container">
      {ShopProducts.map((Product) => (
        <ShopProduct
          key={Product.id}
          titulo={Product.titulo}
          imagem={Product.imagem}
          descricao={Product.descricao}
        />
      ))}
    </S.ListDiv>
  </S.ShopSection>
)

export default ShopProductList
