import ProductModel from '../../Models/ProductModel'
import ProductsList from '../../components/ProductsList'

import Header from '../../components/Header'
import { useEffect, useState } from 'react'

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<ProductModel[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  })

  return (
    <>
      <Header />
      <ProductsList products={restaurantes} />
    </>
  )
}

export default Home
