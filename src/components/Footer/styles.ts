import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterSection = styled.footer`
  background-color: ${cores.laranja};
`
export const FooterDiv = styled.div`
  padding: 40px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const FooterUl = styled.ul`
  display: flex;
  margin-top: 32px;
  margin-bottom: 80px;

  li {
    margin-right: 8px;
  }
`
export const FooterP = styled.p`
  font-size: 10px;
  line-height: 12px;
  text-align: center;
`
