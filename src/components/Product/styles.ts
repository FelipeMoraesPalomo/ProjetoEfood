import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const ProductContainer = styled.div`
  width: 472px;
  color: ${cores.salmao};
  border: 1px solid ${cores.salmao};
  background-color: ${cores.branco};

  @media (max-width: ${breakpoints.tablet}) {
    width: 280px;
  }
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

  @media (max-width: ${breakpoints.tablet}) {
    p {
      font-size: 16px;
    }
  }
`

export const ImgDiv = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 217px;
    object-fit: cover;
  }
`

export const Titulo = styled.h3`
  font-size: 18px;
  font-weight: bold;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 16px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 16px 0;
  line-height: 22px;
  height: 88px;

  @media (max-width: ${breakpoints.tablet}) {
    line-height: normal;
    font-size: 12px;
    margin: 8px 0;
  }
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  div {
    margin-left: 8px;
  }
`
