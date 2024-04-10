import { useState } from 'react'
import { ShoppingCart } from 'phosphor-react'
import { QuantityInput } from '../Form/QuantityIput'
import {
  Container,
  CoffeImg,
  CoffeLabel,
  CoffeTitle,
  CoffeDescription,
  Control,
  CoffePrice,
  CoffeOrder
} from './styles'

type Props = {
  coffee: {
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function Card({ coffee }: Props) {
  const [quantity, setQuantity] = useState(1)

  function incrementState() {
    setQuantity((state) => state + 1)
  }

  function decrementState() {
    setQuantity((state) => state - 1)
  }

  return (
    <Container>
      <CoffeImg src={coffee.image} alt="" />
      <CoffeLabel>
        {coffee.tags.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </CoffeLabel>

      <CoffeTitle>{coffee.title}</CoffeTitle>
      <CoffeDescription>{coffee.description}</CoffeDescription>

      <Control>
        <CoffePrice>
          <span>R$</span>
          <span>{coffee.price}</span>
        </CoffePrice>

        <CoffeOrder>
          <QuantityInput
            quantity={quantity}
            incrementState={incrementState}
            decrementState={decrementState}
          />
          <button>
            <ShoppingCart weight="fill" />
          </button>
        </CoffeOrder>
      </Control>
    </Container>
  )
}
