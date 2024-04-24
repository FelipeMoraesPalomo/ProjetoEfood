import Button from '../Button'
import * as S from './styles'

type Props = {
  imagem: string
  titulo: string
  descricao: string
  onClick?: () => void
}

const ShopProduct = ({ imagem, titulo, descricao, onClick }: Props) => (
  <S.ShopProductDiv onClick={onClick}>
    <img src={imagem} alt={titulo} />
    <S.TextDiv>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <Button title="Adicionar ao carrinho" type="button">
        Adicionar ao carrinho
      </Button>
    </S.TextDiv>
  </S.ShopProductDiv>
)

export default ShopProduct
