import styled from 'styled-components'
import { cores } from '../../styles'

export const ProductContainer = styled.div`
  width: 472px;
  color: ${cores.salmao};
  border: 1px solid ${cores.salmao};
  background-color: ${cores.branco};
`
export const DescricaoDiv = styled.div`
  padding: 8px;

  button {
    cursor: pointer;
    border: none;
  }
`

export const TituloDiv = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;

  p {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: bold;

    span {
      margin-left: 8px;
    }
  }
`

export const ImgDiv = styled.div`
  position: relative;

  img {
    max-width: 100%;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  width: 456px;
  margin: 16px 0;
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  div {
    margin-left: 8px;
  }
`
