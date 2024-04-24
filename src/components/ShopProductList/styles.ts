import styled from 'styled-components'
import { cores } from '../../styles'

export const ShopSection = styled.section`
  margin-top: 56px;
  margin-bottom: 120px;
`

export const ListDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;
`
export const Modal = styled.div`
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
`

export const ModalButton = styled.button`
  background-color: ${cores.laranja};
  color: ${cores.salmao};
  max-width: 220px;
  border: none;
  padding: 4px;
  font-weight: 700;
`
