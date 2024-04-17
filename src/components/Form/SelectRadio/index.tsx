import { InputHTMLAttributes, LegacyRef, forwardRef } from 'react'

import { Container } from './styles'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  isSelected: boolean
}

export const Radio = forwardRef(function Radio(
  { isSelected, children, ...rest }: Props,
  ref: LegacyRef<HTMLInputElement>
) {
  return (
    <Container data-state={isSelected}>
      <input type="radio" ref={ref} {...rest} />
      {children}
    </Container>
  )
})
