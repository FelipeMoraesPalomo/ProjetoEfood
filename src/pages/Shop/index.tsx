import ShopHeader from '../../components/ShopHeader'
import ShopHero from '../../components/ShopHero'

import pizza from '../../assets/images/pizza.png'
import ShopProductList from '../../components/ShopProductList'
import ShopProductModel from '../../Models/ShopProductModel'

const ProdutosShop: ShopProductModel[] = [
  {
    imagem: pizza,
    id: 1,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    imagem: pizza,
    id: 2,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    imagem: pizza,
    id: 3,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    imagem: pizza,
    id: 4,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    imagem: pizza,
    id: 5,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    imagem: pizza,
    id: 6,
    titulo: 'Pizza Marguerita',
    descricao:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const Shop = () => (
  <>
    <ShopHeader />
    <ShopHero />
    <ShopProductList ShopProducts={ProdutosShop} />
  </>
)

export default Shop
