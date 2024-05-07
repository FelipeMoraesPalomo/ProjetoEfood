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
export const Modal = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  height: 344px;

  background-color: ${cores.salmao};
  color: ${cores.branco};
  display: flex;
  padding: 32px;

  #img {
    max-width: 280px;
    max-height: 280px;
    margin-right: 24px;
    object-fit: cover;
  }

  #close {
    width: 16px;
    height: 16px;
    position: absolute;
    right: 8px;
    top: 8px;

    &:hover {
      cursor: pointer;
    }
  }
`

export const ModalTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    margin: 16px 0;
    line-height: 22px;
  }

  button {
    max-width: 220px;
  }
`
