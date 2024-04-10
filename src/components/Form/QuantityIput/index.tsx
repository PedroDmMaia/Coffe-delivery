import { Minus, Plus } from 'phosphor-react'
import { Container } from './styles'

type Props = {
  quantity: number
  incrementState: () => void
  decrementState: () => void
}

export function QuantityInput({
  quantity,
  incrementState,
  decrementState
}: Props) {
  return (
    <Container>
      <button onClick={decrementState}>
        <Minus size={14} />
      </button>
      <span>{quantity}</span>
      <button onClick={incrementState}>
        <Plus size={14} />
      </button>
    </Container>
  )
}
