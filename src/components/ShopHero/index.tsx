import * as S from './styles'

export type Props = {
  tipo: string
  capa: string
  titulo: string
}

const ShopHero = ({ tipo, capa, titulo }: Props) => (
  <S.HeroContainer capa={capa}>
    <S.TextDiv className="container">
      <h3>{tipo}</h3>
      <h2>{titulo}</h2>
    </S.TextDiv>
    <div className="overlay"></div>
  </S.HeroContainer>
)

export default ShopHero
