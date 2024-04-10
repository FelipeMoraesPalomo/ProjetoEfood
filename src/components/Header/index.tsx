import logo from '../../assets/images/logo.png'
import * as S from './styles'

const Header = () => (
  <S.HeaderContainer>
    <S.HeaderDiv>
      <a href="#">
        <img src={logo} alt="Efood" />
      </a>
      <div>
        <S.HeaderTitle>
          Viva experiências grastonômicas no conforto da sua casa
        </S.HeaderTitle>
      </div>
    </S.HeaderDiv>
  </S.HeaderContainer>
)

export default Header
