import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  width: 100%;
  color: ${cores.salmao};
  background-color: ${cores.laranja};
  text-align: center;
  padding: 4px 0;
  font-weight: 700;
  border: none;
  cursor: pointer;
`

export const ButtonLink = styled(Link)`
  background-color: ${cores.salmao};
  color: ${cores.laranja};
  text-align: center;
  height: 26px;
  min-width: 61px;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
  text-decoration: none;
`
