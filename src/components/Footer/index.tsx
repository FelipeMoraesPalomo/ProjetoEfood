import * as S from './styles'

import efood from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <S.FooterSection>
    <S.FooterDiv>
      <a href="#">
        <img src={efood} alt="Efood" />
      </a>
      <S.FooterUl>
        <li>
          <a href="/">
            <img src={instagram} alt="" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={facebook} alt="" />
          </a>
        </li>
        <li>
          <a href="/">
            <img src={twitter} alt="" />
          </a>
        </li>
      </S.FooterUl>
      <S.FooterP>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.FooterP>
    </S.FooterDiv>
  </S.FooterSection>
)

export default Footer
