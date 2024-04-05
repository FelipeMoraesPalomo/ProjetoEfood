import { styled, createGlobalStyle } from 'styled-components'

export const cores = {
  salmao: '#E66767',
  branco: '#FFFFFF',
  laranja: '#FFEBD9',
  laranjaClaro: '#FFF8F2'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body{
    color: ${cores.salmao};
    background-color: ${cores.laranjaClaro};
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`
