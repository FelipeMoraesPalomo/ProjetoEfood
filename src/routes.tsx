import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Shop from './pages/Shop'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop />} />
  </Routes>
)

export default Rotas
