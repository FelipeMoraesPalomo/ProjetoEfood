import styled from 'styled-components'

import heroimg from '../../assets/images/heroimg.png'
import { cores } from '../../styles'

export const HeroContainer = styled.div`
  background: url(${heroimg});
  height: 280px;
`

export const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: ${cores.branco};

  h3 {
    margin-top: 24px;
    font-size: 32px;
    font-weight: 100;
    opacity: 0.5;
  }

  h2 {
    margin-bottom: 32px;
    font-size: 32px;
    font-weight: bold;
  }
`
