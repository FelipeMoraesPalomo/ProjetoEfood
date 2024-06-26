import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ShopSection = styled.section`
  margin-top: 56px;
  margin-bottom: 120px;
`

export const ListDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
    justify-content: center;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
