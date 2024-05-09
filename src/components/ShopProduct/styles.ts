import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const ShopProductDiv = styled.div`
  width: 320px;
  background-color: ${cores.salmao};
  color: ${cores.laranja};
  padding: 8px;
  font-size: 14px;
  border-radius: 8px;

  img {
    width: 100%;
    height: 167px;
    object-fit: cover;
    border-radius: 8px;
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

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    padding: 14px;
    height: auto;

    #img {
      max-width: 100%;
      max-height: auto;
      object-fit: cover;
      margin-right: 0;
    }

    #close {
      width: 25px;
      height: 25px;
      top: -30px;
      right: 0px;
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

  @media (max-width: ${breakpoints.desktop}) {
    p {
      margin: 8px 0;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    h3 {
      font-size: 16px;
      margin-top: 6px;
    }

    p {
      line-height: normal;
      overflow: scroll;
      margin: 6px 0;
    }

    button {
      max-width: 100%;
    }
  }
`
