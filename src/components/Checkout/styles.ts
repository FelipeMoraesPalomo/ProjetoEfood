import styled from 'styled-components'
import { cores } from '../../styles'

export const Form = styled.form`
  color: ${cores.laranja};
  font-size: 14px;
  padding: 16px 0;
  max-width: 345px;

  .cep-number {
    display: flex;
    column-gap: 34px;
  }
`

export const DeliveryContainer = styled.div`
  display: none;

  h2 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  &.show {
    display: block;
  }
`

export const Field = styled.div`
  display: block;
  width: 100%;

  label {
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    height: 32px;
    border: none;
    background-color: ${cores.laranja};
    margin: 8px 0;
  }
`

export const ButtonContainer = styled.div`
  margin-top: 24px;
  button {
    margin-bottom: 8px;
  }
`
// ---

export const PaymentContainer = styled.div`
  max-width: 100%;
  display: none;
  h3 {
    margin-bottom: 16px;
  }

  &.show {
    display: block;
  }
`
export const FieldContainer = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  column-gap: 30px;

  &.cardNumber {
    grid-template-columns: 1.45fr 0.55fr;
  }
`

export const ConfirmedContainer = styled.div`
  display: none;

  h2 {
    font-size: 16px;
    margin-bottom: 16px;
  }

  p {
    line-height: 22px;
    font-weight: 400;
    color: ${cores.laranja};
  }

  button {
    margin-top: 24px;
  }

  &.show {
    display: block;
  }
`
