import Button from '../Button'
import * as S from './styles'

import close from '../../assets/images/close.png'

import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'
import ShopProductModel from '../../Models/ShopProductModel'

import { useState } from 'react'

type Props = {
  shopProduct: ShopProductModel
}

type ModalState = {
  isVisible: boolean
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const ShopProduct = ({ shopProduct }: Props) => {
  const dispatch = useDispatch()

  const buttonText = `Adicionar ao carrinho - ${formataPreco(
    shopProduct.preco
  )}`

  const [modal, setModal] = useState<ModalState>({
    isVisible: false
  })

  const addProductToCart = () => {
    dispatch(add(shopProduct))
    dispatch(open())
  }

  const getDescricao = (descricao: string) => {
    if (descricao.length > 140) {
      return descricao.slice(0, 137) + '...'
    }
    return descricao
  }

  return (
    <>
      <S.ShopProductDiv>
        <img src={shopProduct.foto} alt={shopProduct.nome} />
        <S.TextDiv>
          <h3>{shopProduct.nome}</h3>
          <p>{getDescricao(shopProduct.descricao)}</p>
          <Button
            onClick={() => setModal({ isVisible: true })}
            title="Mais detalhes"
            type="button"
          >
            Mais detalhes
          </Button>
        </S.TextDiv>
      </S.ShopProductDiv>
      <S.Modal className={modal.isVisible ? 'visivel' : ''}>
        <S.ModalContent className="container">
          <img
            id="close"
            src={close}
            alt="Fechar"
            onClick={() => {
              setModal({ isVisible: false })
            }}
          />
          <img id="img" src={shopProduct.foto} alt="" />
          <S.ModalTextDiv>
            <h3>{shopProduct.nome}</h3>
            <p>{shopProduct.descricao}</p>
            <p>Serve: {shopProduct.porcao}</p>
            <Button
              onClick={addProductToCart}
              title="Adiciona ao carrinho"
              type="button"
            >
              {buttonText}
            </Button>
          </S.ModalTextDiv>
        </S.ModalContent>
        <div
          className="overlay"
          onClick={() => {
            setModal({ isVisible: false })
          }}
        ></div>
      </S.Modal>
    </>
  )
}

export default ShopProduct
