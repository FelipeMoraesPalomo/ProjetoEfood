import ShopHeader from '../../components/ShopHeader'
import ShopHero from '../../components/ShopHero'

import ShopProductList from '../../components/ShopProductList'

import { useParams } from 'react-router-dom'
import { useGetMenuQuery } from '../../services/api'

const Shop = () => {
  const { id } = useParams()

  const { data: cardapio } = useGetMenuQuery(id!)

  if (!cardapio) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <ShopHeader />
      <ShopHero
        capa={cardapio.capa}
        tipo={cardapio.tipo}
        titulo={cardapio.titulo}
      />
      <ShopProductList ShopProducts={cardapio} />
    </>
  )
}

export default Shop
