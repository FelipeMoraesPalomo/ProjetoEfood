import Button from '../Button'
import * as S from './styles'

type Props = {
  foto: string
  nome: string
  descricao: string
  onClick?: () => void
}

const ShopProduct = ({ foto, nome, descricao, onClick }: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 140) {
      return descricao.slice(0, 137) + '...'
    }
    return descricao
  }

  return (
    <S.ShopProductDiv onClick={onClick}>
      <img src={foto} alt={nome} />
      <S.TextDiv>
        <h3>{nome}</h3>
        <p>{getDescricao(descricao)}</p>
        <Button title="Adicionar ao carrinho" type="button">
          Adicionar ao carrinho
        </Button>
      </S.TextDiv>
    </S.ShopProductDiv>
  )
}

export default ShopProduct
