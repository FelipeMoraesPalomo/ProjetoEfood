import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import * as S from './styles'

const ShopHeader = () => (
  <S.ShopHeaderContainer>
    <S.UlNavBar className="container">
      <li>
        <Link to={'/'}>Restaurantes</Link>
      </li>
      <li>
        <img src={logo} alt="Efood" />
      </li>
      <li>0 produto(s) no carrinho</li>
    </S.UlNavBar>
  </S.ShopHeaderContainer>
)

export default ShopHeader
