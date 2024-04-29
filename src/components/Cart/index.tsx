import pizza from '../../assets/images/pizza.png'

import Button from '../Button'

import * as S from './styles'

const Cart = () => {
  return (
    <S.CartContainer>
      <S.Overlay></S.Overlay>
      <S.Sidebar>
        <ul>
          <S.CartItem>
            <img className="productImage" src={pizza} />
            <div>
              <h4>Pizza Marguerita</h4>
              <p>R$ 60,90</p>
            </div>
            <button className="close" type="button"></button>
          </S.CartItem>
          <S.CartItem>
            <img className="productImage" src={pizza} />
            <div>
              <h4>Pizza Marguerita</h4>
              <p>R$ 60,90</p>
            </div>
            <button className="close" type="button"></button>
          </S.CartItem>
          <S.CartItem>
            <img className="productImage" src={pizza} />
            <div>
              <h4>Pizza Marguerita</h4>
              <p>R$ 60,90</p>
            </div>
            <button className="close" type="button"></button>
          </S.CartItem>
        </ul>
        <S.Prices>
          <p>Valor total</p>
          <p>R$182,70</p>
        </S.Prices>
        <Button title="Clique aqui para continuar com a entrega" type="button">
          Continuar com a entrega
        </Button>
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
