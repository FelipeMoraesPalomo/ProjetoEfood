import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Section = styled.section`
  margin: 80px auto;
  width: 100%;
  max-width: 1024px;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 80px;
  grid-row-gap: 48px;

  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
