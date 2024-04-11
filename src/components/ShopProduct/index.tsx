import * as S from './styles'

type Props = {
  imagem: string
  titulo: string
  descricao: string
}

const ShopProduct = ({ imagem, titulo, descricao }: Props) => (
  <S.ShopProductDiv>
    <img src={imagem} alt={titulo} />
    <S.TextDiv>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <S.Button>Adicionar ao carrinho</S.Button>
    </S.TextDiv>
  </S.ShopProductDiv>
)

export default ShopProduct
