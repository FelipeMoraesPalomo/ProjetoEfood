import ProductsList from '../../components/ProductsList'

import Header from '../../components/Header'

import { useGetRestaurantQuery } from '../../services/api'

const Home = () => {
  const { data } = useGetRestaurantQuery()

  if (!data) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <ProductsList products={data} />
    </>
  )
}

export default Home
