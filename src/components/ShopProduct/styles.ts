import styled from 'styled-components'
import { cores } from '../../styles'

export const ShopProductDiv = styled.div`
  width: 320px;
  background-color: ${cores.salmao};
  color: ${cores.laranja};
  padding: 8px;
  font-size: 14px;

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
  }

  &:hover {
    cursor: pointer;
  }
`
export const TextDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  h3 {
    margin: 8px 0;
    font-size: 16px;
    font-weight: bold;
  }

  p {
    margin-bottom: 8px;
    line-height: 22px;
    font-weight: 400;
    height: 88px;
  }
`
