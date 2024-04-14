import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.form`
  max-width: 1220px;
  margin: 0 auto;

  display: flex;
  gap: 32px;
`

export const Content = styled.div``

export const FormHeader = styled.div`
  display: flex;
  gap: 8px;

  svg {
    color: ${(props) => props.theme['yellow-700']};
  }

  > div {
    display: flex;
    flex-direction: column;

    h4 {
      ${mixins.fonts.textM};
    }

    span {
      ${mixins.fonts.textS};
    }
  }
`

export const FormAdress = styled.div`
  width: 100%;
  min-width: 640px;

  background: ${({ theme }) => theme['base-card']};
  border-radius: 6px;

  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

export const FormInputs = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
`

export const PaymentMethod = styled.div``

export const ContentCoffe = styled.div``

export const CoffeCheckout = styled.div``
