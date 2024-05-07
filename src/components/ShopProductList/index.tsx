import ShopProduct from '../ShopProduct'
import * as S from './styles'

import close from '../../assets/images/close.png'
import { useState } from 'react'
import Button from '../Button'
import ProductModel from '../../Models/ProductModel'
import ShopProductModel from '../../Models/ShopProductModel'

type Props = {
  ShopProducts: ProductModel
}

interface ModalState extends ShopProductModel {
  isVisible: boolean
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ShopProductList = ({ ShopProducts }: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    descricao: '',
    foto: '',
    id: 0,
    porcao: '',
    preco: 0,
    nome: ''
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      descricao: modal.descricao,
      foto: modal.foto,
      id: modal.id,
      porcao: modal.porcao,
      preco: modal.preco,
      nome: modal.nome
    })
  }

  const buttonText = `Adicionar ao carrinho - ${formataPreco(modal.preco)}`

  return (
    <>
      <S.ShopSection>
        <S.ListDiv className="container">
          {ShopProducts.cardapio.map((Product) => (
            <ShopProduct
              key={Product.id}
              shopProduct={Product}
              onClick={() => {
                setModal({
                  isVisible: true,
                  descricao: Product.descricao,
                  foto: Product.foto,
                  id: Product.id,
                  porcao: Product.porcao,
                  preco: Product.preco,
                  nome: Product.nome
                })
              }}
            />
          ))}
        </S.ListDiv>
      </S.ShopSection>
      <S.Modal className={modal.isVisible ? 'visivel' : ''}>
        <S.ModalContent className="container">
          <img
            id="close"
            src={close}
            alt="Fechar"
            onClick={() => {
              closeModal()
            }}
          />
          <img id="img" src={modal.foto} alt="" />
          <S.ModalTextDiv>
            <h3>{modal.nome}</h3>
            <p>{modal.descricao}</p>
            <p>Serve: {modal.porcao}</p>
            <Button title="Adiciona ao carrinho" type="button">
              {buttonText}
            </Button>
          </S.ModalTextDiv>
        </S.ModalContent>
        <div
          className="overlay"
          onClick={() => {
            closeModal()
          }}
        ></div>
      </S.Modal>
    </>
  )
}

export default ShopProductList
