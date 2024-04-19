import {
  Container,
  DeliveryInformation,
  DeliveryInformationContent
} from './styles'
import delivery from '../../assets/delivery.png'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { useCart } from '../../hooks/useCart'
import { useParams } from 'react-router-dom'

export function Success() {
  const theme = useTheme()
  const { orders } = useCart()
  const { orderId } = useParams()
  const orderInfo = orders.find((order) => order.id === Number(orderId))
  const paymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    cash: 'Dinheiro'
  }

  if (!orderInfo?.id) {
    return null
  }

  return (
    <Container>
      <h2>Uhul! Pedido confirmado</h2>
      <span>Agora é só aguardar que logo o café chegará até você</span>

      <div>
        <DeliveryInformation>
          <DeliveryInformationContent>
            <div>
              <MapPin
                size={32}
                color="#ededed"
                weight="fill"
                style={{ backgroundColor: theme['purple-400'] }}
              />
              <div>
                <span>
                  Entrega em{' '}
                  <strong>
                    {orderInfo.street}, {orderInfo.number}
                  </strong>
                </span>

                <span>
                  {orderInfo.neighborhood} - {orderInfo.city}, {orderInfo.state}
                </span>
              </div>
            </div>

            <div>
              <Timer
                size={32}
                color="#ededed"
                weight="fill"
                style={{ background: theme['yellow-400'] }}
              />
              <div>
                <span>Previsão de entrega</span>{' '}
                <strong>20 min - 30 min</strong>
              </div>
            </div>

            <div>
              <CurrencyDollar
                size={32}
                color="#ededed"
                weight="thin"
                style={{ background: theme['yellow-700'] }}
              />
              <div>
                <span>Pagamento na entrega</span>
                <strong>{paymentMethod[orderInfo.paymentMethod]}</strong>
              </div>
            </div>
          </DeliveryInformationContent>
        </DeliveryInformation>

        <img src={delivery} alt="" />
      </div>
    </Container>
  )
}
