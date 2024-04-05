import ProductModel from '../../Models/ProductModel'
import Product from '../Product'
import { List, Section } from './styles'

type Props = {
  products: ProductModel[]
}

const ProductsList = ({ products }: Props) => (
  <Section>
    <List>
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
    </List>
  </Section>
)

export default ProductsList
