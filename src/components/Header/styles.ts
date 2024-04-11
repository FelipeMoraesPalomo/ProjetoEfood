import styled from 'styled-components'
import { cores } from '../../styles'
import vector from '../../assets/images/vector.png'

export const HeaderContainer = styled.header`
  background-color: ${cores.laranja};
  height: 384px;
  background: url(${vector});
`
export const HeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 40px;
  div {
    width: 539px;
    text-align: center;
  }
`

export const HeaderTitle = styled.h2`
  font-weight: 900;
  font-size: 36px;
`
