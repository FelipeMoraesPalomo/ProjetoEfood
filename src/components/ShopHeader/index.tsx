import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'
import * as S from './styles'

import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

const ShopHeader = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.ShopHeaderContainer>
      <S.UlNavBar className="container">
        <li>
          <Link to={'/'}>Restaurantes</Link>
        </li>
        <li>
          <img src={logo} alt="Efood" />
        </li>
        <li onClick={openCart}> {items.length} produto(s) no carrinho</li>
      </S.UlNavBar>
    </S.ShopHeaderContainer>
  )
}

export default ShopHeader
