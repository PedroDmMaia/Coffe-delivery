import { useEffect, useState } from 'react'
import { ShoppingCart, Check } from 'phosphor-react'
import { QuantityInput } from '../Form/QuantityIput'
import { useCart } from '../../hooks/useCart'

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
import { priceFormatter } from '../../utils/formatter'
import { useTheme } from 'styled-components'

type Props = {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}

export function Card({ coffee }: Props) {
  const [quantity, setQuantity] = useState(1)
  const [isItemAdded, setIsItemAdded] = useState(false)

  const theme = useTheme()
  const { addItem } = useCart()

  function incrementState() {
    setQuantity((state) => state + 1)
  }

  function decrementState() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function handleAddItem() {
    addItem({ id: coffee.id, quantity })
    setIsItemAdded(true)
    setQuantity(1)
  }

  useEffect(() => {
    let timeout: number

    if (isItemAdded) {
      timeout = setTimeout(() => setIsItemAdded(false), 1000)
    }

    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }, [isItemAdded])

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
          <span>{priceFormatter.format(coffee.price)}</span>
        </CoffePrice>

        <CoffeOrder>
          <QuantityInput
            quantity={quantity}
            incrementState={incrementState}
            decrementState={decrementState}
          />
          <button disabled={isItemAdded} onClick={handleAddItem}>
            {isItemAdded ? (
              <Check weight="fill" size={22} color={theme['base-card']} />
            ) : (
              <ShoppingCart
                size={22}
                weight="fill"
                color={theme['base-card']}
              />
            )}
          </button>
        </CoffeOrder>
      </Control>
    </Container>
  )
}
