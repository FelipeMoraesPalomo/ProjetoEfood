import styled from 'styled-components'
import { cores } from '../../styles'

import vector from '../../assets/images/vector.png'

export const ShopHeaderContainer = styled.header`
  background-color: ${cores.laranja};
  background: url(${vector});
  height: 160px;
  font-size: 18px;
  font-weight: bold;
`

export const UlNavBar = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  align-items: center;

  li {
    margin-top: 42px;
    a {
      color: ${cores.salmao};
      text-decoration: none;
    }
  }
`