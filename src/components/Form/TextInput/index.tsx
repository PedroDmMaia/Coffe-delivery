import {
  HTMLAttributes,
  InputHTMLAttributes,
  LegacyRef,
  forwardRef,
  useState,
  FocusEvent
} from 'react'
import { FieldError } from 'react-hook-form'

import { Box, Container } from './styles'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean
  containerProps?: HTMLAttributes<HTMLDivElement>
  error?: FieldError
}

export const TextInput = forwardRef(function TextInput(
  { optional, containerProps, error, onFocus, onBlur, ...rest }: Props,
  ref: LegacyRef<HTMLInputElement>
) {
  const [isFocus, setIsFocus] = useState(false)

  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocus(true)
    onFocus?.(event)
  }

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocus(false)
    onBlur?.(event)
  }

  return (
    <Box {...containerProps}>
      <Container data-state={isFocus ? 'Focused' : 'Blurred'}>
        <input
          type="text"
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={ref}
          {...rest}
        />

        {optional && <span>Opcional</span>}
      </Container>

      {error?.message ? <span role="alert">{error.message}</span> : null}
    </Box>
  )
})
