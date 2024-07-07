import Button from '../Button'
import * as S from './styles'

type Props = {
  totalPrice: number
  checkoutStart: boolean
}

const Checkout = () => {
  return (
    <S.Form>
      <S.DeliveryContainer className="show">
        <h2>Entrega</h2>
        <S.Field>
          <label htmlFor="remetente">Quem irá receber</label>
          <input type="text" id="remetente" name="remetente" required />
        </S.Field>
        <S.Field>
          <label htmlFor="endereco">Endereço</label>
          <input type="text" id="endereco" name="endereco" required />
        </S.Field>
        <S.Field>
          <label htmlFor="cidade">Cidade</label>
          <input type="text" id="cidade" name="cidade" required />
        </S.Field>
        <div className="cep-number">
          <S.Field>
            <label htmlFor="Cep">CEP</label>
            <input type="text" id="Cep" name="Cep" required />
          </S.Field>
          <S.Field>
            <label htmlFor="numero">Número</label>
            <input type="text" id="numero" name="numero" required />
          </S.Field>
        </div>
        <S.Field>
          <label htmlFor="complemento">Complemento (opcional)</label>
          <input type="text" id="complemento" name="complemento" required />
        </S.Field>

        <S.ButtonContainer>
          <Button type="button" title="Continuar com o pagamento">
            Continuar com o pagamento
          </Button>
          <Button type="button" title="Voltar para o carrinho">
            Voltar para o carrinho
          </Button>
        </S.ButtonContainer>
      </S.DeliveryContainer>
      <S.PaymentContainer>
        <h3>Pagamento - Valor a pagar R$ 200</h3>
        <S.Field>
          <label htmlFor="nomeCartao">Nome no cartão</label>
          <input id="nomeCartao" name="nomeCartao" type="text" required />
        </S.Field>
        <S.FieldContainer className="cardNumber">
          <S.Field>
            <label htmlFor="numeroCartao">Número do cartão</label>
            <input id="numeroCartao" name="numeroCartao" type="text" required />
          </S.Field>
          <S.Field>
            <label htmlFor="cvv">CVV</label>
            <input id="cvv" name="cvv" type="text" />
          </S.Field>
        </S.FieldContainer>
        <S.FieldContainer>
          <S.Field>
            <label htmlFor="mesVencimento">Mês de vencimento</label>
            <input
              id="mesVencimento"
              name="mesVencimento"
              type="text"
              required
            />
          </S.Field>
          <S.Field>
            <label htmlFor="anoVencimento">Ano de vencimento</label>
            <input
              id="anoVencimento"
              name="anoVencimento"
              type="text"
              required
            />
          </S.Field>
        </S.FieldContainer>
        <S.ButtonContainer>
          <Button type="button" title="Finalizar pagamento">
            Finalizar pagamento
          </Button>
          <Button type="button" title="Voltar para endereço">
            Voltar para a edição de endereço
          </Button>
        </S.ButtonContainer>
      </S.PaymentContainer>
      <S.ConfirmedContainer>
        <h2>Pedido realizado - </h2>
        <p>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </p>
        <br />
        <p>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </p>
        <br />
        <p>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </p>
        <br />
        <p>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </p>
        <Button type="button" title="Concluir">
          Concluir
        </Button>
      </S.ConfirmedContainer>
    </S.Form>
  )
}

export default Checkout
