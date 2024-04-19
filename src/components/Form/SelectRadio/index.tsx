import { InputHTMLAttributes, LegacyRef, forwardRef } from 'react'

import { Container } from './styles'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  isSelected: boolean
}

export const Radio = forwardRef(function Radio(
  { id, isSelected, children, ...rest }: Props,
  ref: LegacyRef<HTMLInputElement>
) {
  return (
    <Container data-state={isSelected}>
      <div>
        <input id={id} type="radio" ref={ref} {...rest} />
        <label htmlFor={id}>{children}</label>
      </div>
    </Container>
  )
})
