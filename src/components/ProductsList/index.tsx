import ProductModel from '../../Models/ProductModel'
import Product from '../Product'
import * as S from './styles'

type Props = {
  products: ProductModel[]
}

const ProductsList = ({ products }: Props) => (
  <S.Section>
    <S.List>
      {products.map((product) => (
        <Product
          descricao={product.descricao}
          imagem={product.imagem}
          nota={product.nota}
          origem={product.origem}
          titulo={product.titulo}
          key={product.id}
          destaque={product.destaque}
        />
      ))}
    </S.List>
  </S.Section>
)

export default ProductsList
