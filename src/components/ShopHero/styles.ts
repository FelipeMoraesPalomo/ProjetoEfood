import styled from 'styled-components'

import { cores } from '../../styles'

import type { Props } from '.'

export const HeroContainer = styled.div<Omit<Props, 'titulo' | 'tipo'>>`
  position: relative;
  background: url(${(props) => props.capa});
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
  }
`

export const TextDiv = styled.div`
  position: relative;
  z-index: 1;
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
