import {
  MapPinLine,
  CreditCard,
  Bank,
  Money,
  CurrencyDollar,
  Trash
} from 'phosphor-react'

import {
  Container,
  Content,
  FormAdress,
  PaymentMethod,
  CoffeCheckout,
  FormHeader,
  FormInputs,
  PaymentMethodHeader,
  CoffeList,
  CheckoutInputs,
  CardCoffe,
  OrderTotal,
  OrderButton
} from './styles'

import { TextInput } from '../../components/Form/TextInput'
import { Radio } from '../../components/Form/SelectRadio'
import { QuantityInput } from '../../components/Form/QuantityIput'

import { coffees } from '../../../data.json'

export function Checkout() {
  return (
    <Container onSubmit={(e) => e.preventDefault()}>
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
              containerProps={{ style: { gridArea: 'cep' } }}
            />

            <TextInput
              placeholder="Rua"
              containerProps={{ style: { gridArea: 'street' } }}
            />

            <TextInput
              placeholder="Número"
              type="number"
              containerProps={{ style: { gridArea: 'number' } }}
            />

            <TextInput
              placeholder="Complemento"
              containerProps={{ style: { gridArea: 'fullAdress' } }}
              optional
            />

            <TextInput
              placeholder="Bairro"
              containerProps={{ style: { gridArea: 'neighborhood' } }}
            />

            <TextInput
              placeholder="Cidade"
              containerProps={{ style: { gridArea: 'city' } }}
            />

            <TextInput
              placeholder="UF"
              containerProps={{ style: { gridArea: 'state' } }}
            />
          </FormInputs>
        </FormAdress>

        <PaymentMethod>
          <PaymentMethodHeader>
            <CurrencyDollar size={16} />

            <div>
              <h4>Pagamento</h4>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </PaymentMethodHeader>

          <div>
            <Radio isSelected={false} value="credit">
              <CreditCard size={16} />
              <span>Cartão de crédito</span>
            </Radio>

            <Radio isSelected={false} value="debit">
              <Bank size={16} />
              <span>Cartão de débito</span>
            </Radio>

            <Radio isSelected={false} value="cash">
              <Money size={16} />
              <span>Dinheiro</span>
            </Radio>
          </div>
        </PaymentMethod>
      </Content>
      <Content>
        <h2>Cafés selecionados</h2>

        <CoffeCheckout>
          <CoffeList>
            {coffees
              .filter((coffee) => coffee.title === 'Expresso Americano')
              .map((coffee) => (
                <div key={coffee.id}>
                  <CardCoffe>
                    <img src={coffee.image} alt="" />

                    <div>
                      <span>{coffee.title}</span>
                      <div>
                        <CheckoutInputs>
                          <QuantityInput
                            quantity={1}
                            incrementState={() => console.log('incrementa')}
                            decrementState={() => console.log('decrement')}
                          />

                          <button type="button">
                            <Trash size={16} />

                            <span>remover</span>
                          </button>
                        </CheckoutInputs>
                      </div>
                    </div>
                  </CardCoffe>
                  <aside>R$ {coffee.price}0</aside>
                </div>
              ))}
          </CoffeList>
          <OrderTotal>
            <div>
              <p>Total de items</p>
              <span>R$ 29,70</span>
            </div>

            <div>
              <p>Entrega</p>
              <span>R$ 3,50</span>
            </div>

            <div>
              <p>Total</p>

              <span>R$ 33,20</span>
            </div>
          </OrderTotal>
          <OrderButton type="submit">Confirmar pedido</OrderButton>
        </CoffeCheckout>
      </Content>
    </Container>
  )
}
