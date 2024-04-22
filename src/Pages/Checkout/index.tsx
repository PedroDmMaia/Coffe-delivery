import { z } from 'zod'
import {
  MapPinLine,
  CreditCard,
  Bank,
  Money,
  CurrencyDollar,
  Trash
} from 'phosphor-react'

import { TextInput } from '../../components/Form/TextInput'
import { Radio } from '../../components/Form/SelectRadio'
import { QuantityInput } from '../../components/Form/QuantityIput'
import { Coffees } from '../../../data.json'
import { priceFormatter } from '../../utils/formatter'
import { useCart } from '../../hooks/useCart'

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
  OrderButton,
  ErrorMessageRadio
} from './styles'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export type FormInputs = {
  cep: number
  street: string
  number: number
  fullAdress: string
  neighborhood: string
  city: string
  state: string
  paymentMethod: 'credit' | 'debit' | 'cash'
}

const newOrder = z.object({
  cep: z.number({ invalid_type_error: 'Informe o CEP' }),
  street: z.string().min(1, 'Informe a Rua'),
  number: z.number({ invalid_type_error: 'Informe o número' }).min(1),
  fullAdress: z.string(),
  neighborhood: z.string().min(1, 'Informe o Bairro'),
  city: z.string().min(1, 'Informe a Cidade'),
  state: z.string().min(1, 'Informe o Estado'),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: 'Informe um método de pagamento'
  })
})

export type OrderInfo = z.infer<typeof newOrder>

const shippingPrice = 3.5

export function Checkout() {
  const {
    cart,
    checkout,
    incrementItemQuantity,
    decrementItemQuantity,
    removeItem
  } = useCart()

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = Coffees.find((coffee) => coffee.id === item.id)

    if (!coffeeInfo) {
      throw new Error('invalid coffee')
    }

    return {
      ...coffeeInfo,
      quantity: item.quantity
    }
  })

  const totalPriceItems = coffeesInCart.reduce((previusValue, currentItem) => {
    return (previusValue += currentItem.price * currentItem.quantity)
  }, 0)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder)
  })

  const selectedPaymentMethod = watch('paymentMethod')

  function handleItemIncrement(itemId: string) {
    incrementItemQuantity(itemId)
  }

  function handleItemDecrement(itemId: string) {
    decrementItemQuantity(itemId)
  }

  function handleRemoveItem(itemId: string) {
    removeItem(itemId)
  }

  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    if (cart.length === 0) {
      return alert('O carrinho esta vazio')
    }

    checkout(data)
  }

  return (
    <Container onSubmit={handleSubmit(handleOrderCheckout)}>
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
              error={errors.cep}
              {...register('cep', { valueAsNumber: true })}
            />

            <TextInput
              placeholder="Rua"
              containerProps={{ style: { gridArea: 'street' } }}
              error={errors.street}
              {...register('street')}
            />

            <TextInput
              placeholder="Número"
              type="number"
              containerProps={{ style: { gridArea: 'number' } }}
              error={errors.number}
              {...register('number', { valueAsNumber: true })}
            />

            <TextInput
              placeholder="Complemento"
              optional
              containerProps={{ style: { gridArea: 'fullAdress' } }}
              error={errors.fullAdress}
              {...register('fullAdress')}
            />

            <TextInput
              placeholder="Bairro"
              containerProps={{ style: { gridArea: 'neighborhood' } }}
              error={errors.neighborhood}
              {...register('neighborhood')}
            />

            <TextInput
              placeholder="Cidade"
              containerProps={{ style: { gridArea: 'city' } }}
              error={errors.city}
              {...register('city')}
            />

            <TextInput
              placeholder="UF"
              containerProps={{ style: { gridArea: 'state' } }}
              error={errors.state}
              {...register('state')}
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
            <Radio
              id="credit"
              isSelected={selectedPaymentMethod === 'credit'}
              {...register('paymentMethod')}
              value="credit"
            >
              <CreditCard size={16} />
              <span>Cartão de crédito</span>
            </Radio>

            <Radio
              id="debit"
              isSelected={selectedPaymentMethod === 'debit'}
              {...register('paymentMethod')}
              value="debit"
            >
              <Bank size={16} />
              <span>Cartão de débito</span>
            </Radio>

            <Radio
              id="cash"
              isSelected={selectedPaymentMethod === 'cash'}
              {...register('paymentMethod')}
              value="cash"
            >
              <Money size={16} />
              <span>Dinheiro</span>
            </Radio>
          </div>

          {errors.paymentMethod ? (
            <ErrorMessageRadio role="alert">
              {errors.paymentMethod.message}
            </ErrorMessageRadio>
          ) : null}
        </PaymentMethod>
      </Content>
      <Content>
        <h2>Cafés selecionados</h2>

        <CoffeCheckout>
          <CoffeList>
            {coffeesInCart.map((coffee) => (
              <div key={coffee.id}>
                <CardCoffe>
                  <img src={coffee.image} alt="" />

                  <div>
                    <span>{coffee.title}</span>
                    <div>
                      <CheckoutInputs>
                        <QuantityInput
                          quantity={coffee.quantity}
                          incrementState={() => handleItemIncrement(coffee.id)}
                          decrementState={() => handleItemDecrement(coffee.id)}
                        />

                        <button
                          type="button"
                          onClick={() => handleRemoveItem(coffee.id)}
                        >
                          <Trash size={16} />

                          <span>remover</span>
                        </button>
                      </CheckoutInputs>
                    </div>
                  </div>
                </CardCoffe>
                <aside>{priceFormatter.format(coffee.price)}</aside>
              </div>
            ))}
          </CoffeList>
          <OrderTotal>
            <div>
              <p>Total de items</p>
              <span>{priceFormatter.format(totalPriceItems)}</span>
            </div>

            <div>
              <p>Entrega</p>
              <span>{priceFormatter.format(shippingPrice)}</span>
            </div>

            <div>
              <p>Total</p>
              <span>
                {priceFormatter.format(totalPriceItems + shippingPrice)}
              </span>
            </div>
          </OrderTotal>
          <OrderButton type="submit">Confirmar pedido</OrderButton>
        </CoffeCheckout>
      </Content>
    </Container>
  )
}
