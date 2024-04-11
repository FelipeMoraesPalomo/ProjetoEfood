import styled from 'styled-components'
import { cores } from '../../styles'

export const ShopProductDiv = styled.div`
  width: 320px;
  background-color: ${cores.salmao};
  color: ${cores.laranja};
  padding: 8px;
  font-size: 14px;
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
  }
`
export const Button = styled.button`
  width: 100%;
  color: ${cores.salmao};
  background-color: ${cores.laranja};
  text-align: center;
  padding: 4px 0;
  font-weight: 700;
  border: none;
  cursor: pointer;
`
