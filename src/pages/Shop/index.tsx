import ShopHeader from '../../components/ShopHeader'
import ShopHero from '../../components/ShopHero'

import ShopProductList from '../../components/ShopProductList'
import { useEffect, useState } from 'react'
import ProductModel from '../../Models/ProductModel'

import { useParams } from 'react-router-dom'

const Shop = () => {
  const { id } = useParams()

  const [cardapio, setCardapio] = useState<ProductModel>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCardapio(res))
  })

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
