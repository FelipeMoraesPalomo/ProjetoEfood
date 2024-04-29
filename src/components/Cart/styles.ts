import styled from 'styled-components'
import { cores } from '../../styles'

import lixeira from '../../assets/images/lixeira.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
  font-size: 14px;
  font-weight: 700;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.salmao};
  display: flex;
  flex-direction: column;
  z-index: 1;
  padding: 16px 8px;

  .productImage {
    width: 80px;
    height: 80px;
    margin-right: 8px;
    object-fit: cover;
  }

  .close {
    background: url(${lixeira});
    width: 16px;
    height: 16px;
    border: none;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`

export const CartItem = styled.li`
  position: relative;
  display: flex;
  background-color: ${cores.laranja};
  padding: 8px 8px 12px 8px;
  width: 344px;
  margin-top: 16px;

  h4 {
    font-size: 18px;
    font-weight: 900;
  }

  p {
    margin-top: 16px;
    font-weight: 400;
  }
`
export const Prices = styled.div`
  color: ${cores.laranjaClaro};
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 16px;
`
