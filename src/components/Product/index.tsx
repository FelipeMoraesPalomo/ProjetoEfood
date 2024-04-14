import Tag from '../Tag'
import estrela from '../../assets/images/estrela.png'

import * as S from './styles'
import Button from '../Button'

export type Props = {
  imagem: string
  titulo: string
  origem: string
  destaque?: boolean
  nota: string
  descricao: string
  to: string
}

const Product = ({
  imagem,
  titulo,
  origem,
  destaque,
  nota,
  descricao,
  to
}: Props) => (
  <S.ProductContainer>
    <S.ImgDiv>
      <img src={imagem} alt={titulo} />
      <S.Tags>
        {destaque ? <Tag>Destaque da semana</Tag> : ''}
        <Tag>{origem}</Tag>
      </S.Tags>
    </S.ImgDiv>
    <S.DescricaoDiv>
      <S.TituloDiv>
        <S.Titulo>{titulo}</S.Titulo>
        <p>
          {nota}
          <span>
            <img src={estrela} alt="Estrela" />
          </span>
        </p>
      </S.TituloDiv>
      <S.Descricao>{descricao}</S.Descricao>
      <Button title="Saiba mais" to={to} type="link">
        Saiba mais
      </Button>
    </S.DescricaoDiv>
  </S.ProductContainer>
)

export default Product
