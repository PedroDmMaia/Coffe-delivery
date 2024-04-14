import { MapPinLine } from 'phosphor-react'
import {
  Container,
  Content,
  FormAdress,
  PaymentMethod,
  ContentCoffe,
  CoffeCheckout,
  FormHeader,
  FormInputs
} from './styles'
import { TextInput } from '../../components/Form/TextInput'

export function Checkout() {
  return (
    <Container>
      <Content>
        <h2>Complete seu pedido</h2>

        <FormAdress>
          <FormHeader>
            <MapPinLine />

            <div>
              <h4>Endereço de entrega</h4>
              <span>Informe o endereço que deseja receber seu pedido</span>
            </div>
          </FormHeader>
          <FormInputs>
            <TextInput
              placeholder="Cep"
              type="number"
              style={{ gridArea: 'cep' }}
            />

            <TextInput placeholder="Rua" style={{ gridArea: 'street' }} />

            <TextInput
              placeholder="Número"
              type="number"
              style={{ gridArea: 'number' }}
            />

            <TextInput
              placeholder="Complemento"
              style={{ gridArea: 'fullAdress' }}
              optional
            />

            <TextInput
              placeholder="Bairro"
              style={{ gridArea: 'neighborhood' }}
            />

            <TextInput placeholder="Cidade" style={{ gridArea: 'city' }} />

            <TextInput placeholder="UF" style={{ gridArea: 'state' }} />
          </FormInputs>
        </FormAdress>

        <PaymentMethod></PaymentMethod>
      </Content>
      <ContentCoffe>
        <h2>Cafés selecionados</h2>

        <CoffeCheckout>
          <div>
            <div>
              <p>Total de items</p>
              <div>
                <span>R$</span>
                <span></span>
              </div>
            </div>

            <div>
              <p>Entrega</p>
              <div>
                <span>R$</span>
                <span></span>
              </div>
            </div>

            <div>
              <p>Total</p>
              <div>
                <span>R$</span>
                <span></span>
              </div>
            </div>
          </div>
          <button type="submit">Confirmar pedido</button>
        </CoffeCheckout>
      </ContentCoffe>
    </Container>
  )
}
