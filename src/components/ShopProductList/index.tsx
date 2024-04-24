import ShopProductModel from '../../Models/ShopProductModel'
import ShopProduct from '../ShopProduct'
import Tag from '../Tag'
import * as S from './styles'

import pizza from '../../assets/images/pizza.png'
import close from '../../assets/images/close.png'
import { useState } from 'react'

type Props = {
  ShopProducts: ShopProductModel[]
}

const ShopProductList = ({ ShopProducts }: Props) => {
  const [modal, setModal] = useState(false)

  return (
    <>
      <S.ShopSection>
        <S.ListDiv className="container">
          {ShopProducts.map((Product) => (
            <ShopProduct
              key={Product.id}
              titulo={Product.titulo}
              imagem={Product.imagem}
              descricao={Product.descricao}
              onClick={() => {
                setModal(true)
              }}
            />
          ))}
        </S.ListDiv>
      </S.ShopSection>
      <S.Modal className={modal ? 'visivel' : ''}>
        <S.ModalContent className="container">
          <img
            id="close"
            src={close}
            alt="Fechar"
            onClick={() => {
              setModal(false)
            }}
          />
          <img id="img" src={pizza} alt="" />
          <S.ModalTextDiv>
            <h3>Pizza Marguerita</h3>
            <p>
              A pizza Margherita é uma pizza clássica da culinária italiana,
              reconhecida por sua simplicidade e sabor inigualável. Ela é feita
              com uma base de massa fina e crocante, coberta com molho de tomate
              fresco, queijo mussarela de alta qualidade, manjericão fresco e
              azeite de oliva extra-virgem. A combinação de sabores é perfeita,
              com o molho de tomate suculento e ligeiramente ácido, o queijo
              derretido e cremoso e as folhas de manjericão frescas, que
              adicionam um toque de sabor herbáceo. É uma pizza simples, mas
              deliciosa, que agrada a todos os paladares e é uma ótima opção
              para qualquer ocasião.
            </p>
            <p>Serve: de 2 a 3 pessoas</p>
            <S.ModalButton>Adicionar ao carrinho - R$ 60,90</S.ModalButton>
          </S.ModalTextDiv>
        </S.ModalContent>
        <div
          className="overlay"
          onClick={() => {
            setModal(false)
          }}
        ></div>
      </S.Modal>
    </>
  )
}

export default ShopProductList
