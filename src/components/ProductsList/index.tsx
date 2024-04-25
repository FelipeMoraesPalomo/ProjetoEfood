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
          capa={product.capa}
          avaliacao={product.avaliacao}
          tipo={product.tipo}
          titulo={product.titulo}
          key={product.id}
          destacado={product.destacado}
          id={product.id}
        />
      ))}
    </S.List>
  </S.Section>
)

export default ProductsList
