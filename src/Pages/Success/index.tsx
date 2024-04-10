import {
  Container,
  DeliveryInformation,
  DeliveryInformationContent
} from './styles'
import delivery from '../../assets/delivery.png'
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'
import { useTheme } from 'styled-components'

export function Success() {
  const theme = useTheme()

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
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </span>

                <span>Farrapos - Porto Alegre, RS</span>
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
                <strong>Cartão de Crédito</strong>
              </div>
            </div>
          </DeliveryInformationContent>
        </DeliveryInformation>

        <img src={delivery} alt="" />
      </div>
    </Container>
  )
}
