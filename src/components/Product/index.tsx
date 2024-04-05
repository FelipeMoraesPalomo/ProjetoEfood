import Tag from '../Tag'
import estrela from '../../assets/images/estrela.png'
import {
  Descricao,
  DescricaoDiv,
  ImgDiv,
  ProductContainer,
  Tags,
  Titulo,
  TituloDiv
} from './styles'

export type Props = {
  imagem: string
  titulo: string
  origem: string
  destaque?: boolean
  nota: string
  descricao: string
}

const Product = ({
  imagem,
  titulo,
  origem,
  destaque,
  nota,
  descricao
}: Props) => (
  <ProductContainer>
    <ImgDiv>
      <img src={imagem} alt={titulo} />
      <Tags>
        {destaque ? <Tag>Destaque da semana</Tag> : ''}
        <Tag>{origem}</Tag>
      </Tags>
    </ImgDiv>
    <DescricaoDiv>
      <TituloDiv>
        <Titulo>{titulo}</Titulo>
        <p>
          {nota}
          <span>
            <img src={estrela} alt="Estrela" />
          </span>
        </p>
      </TituloDiv>
      <Descricao>{descricao}</Descricao>
      <Tag size="big">Saiba mais</Tag>
    </DescricaoDiv>
  </ProductContainer>
)

export default Product
