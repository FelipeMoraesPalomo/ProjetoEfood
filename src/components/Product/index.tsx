import Tag from '../Tag'
import estrela from '../../assets/images/estrela.png'

import * as S from './styles'
import Button from '../Button'

export type Props = {
  capa: string
  titulo: string
  tipo: string
  destacado?: boolean
  avaliacao: string
  descricao: string
  id: number
}

const Product = ({
  capa,
  titulo,
  tipo,
  destacado,
  avaliacao,
  descricao,
  id
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 250) {
      return descricao.slice(0, 247) + '...'
    }
    return descricao
  }

  return (
    <S.ProductContainer>
      <S.ImgDiv>
        <img src={capa} alt={titulo} />
        <S.Tags>
          {destacado ? <Tag>Destaque da semana</Tag> : ''}
          <Tag>{tipo}</Tag>
        </S.Tags>
      </S.ImgDiv>
      <S.DescricaoDiv>
        <S.TituloDiv>
          <S.Titulo>{titulo}</S.Titulo>
          <p>
            {avaliacao}
            <span>
              <img src={estrela} alt="Estrela" />
            </span>
          </p>
        </S.TituloDiv>
        <S.Descricao>{getDescricao(descricao)}</S.Descricao>
        <Button title="Saiba mais" to={`shop/${id}`} type="link">
          Saiba mais
        </Button>
      </S.DescricaoDiv>
    </S.ProductContainer>
  )
}

export default Product
