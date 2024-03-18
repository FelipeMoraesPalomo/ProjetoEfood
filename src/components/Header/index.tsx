import logo from '../../assets/images/logo.png'
import { HeaderContainer, HeaderDiv, HeaderTitle } from './styles'

const Header = () => (
  <HeaderContainer>
    <HeaderDiv>
      <a href="#">
        <img src={logo} alt="" />
      </a>
      <div>
        <HeaderTitle>
          Viva experiências grastonômicas no conforto da sua casa
        </HeaderTitle>
      </div>
    </HeaderDiv>
  </HeaderContainer>
)

export default Header
