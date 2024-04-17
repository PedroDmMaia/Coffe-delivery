import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.form`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 40px 20px;

  display: flex;
  gap: 32px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  h2 {
    ${mixins.fonts.titleXS};
    color: ${(props) => props.theme['base-title']};
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

export const FormHeader = styled.div`
  display: flex;
  align-items: start;
  gap: 8px;

  svg {
    color: ${(props) => props.theme['yellow-700']};
  }

  > div {
    display: flex;
    flex-direction: column;

    h4 {
      ${mixins.fonts.textM};
      color: ${({ theme }) => theme['base-subtitle']};
    }

    span {
      ${mixins.fonts.textS};
    }
  }
`

export const FormInputs = styled.div`
  display: grid;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAdress fullAdress'
    'neighborhood city state';
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
`

export const PaymentMethod = styled.div`
  background: ${({ theme }) => theme['base-card']};
  padding: 40px;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  gap: 32px;

  > div {
    display: flex;
    gap: 12px;
  }
`

export const PaymentMethodHeader = styled.header`
  display: flex;
  align-items: start;
  gap: 8px;

  svg {
    color: ${({ theme }) => theme['purple-400']};
  }

  div {
    h4 {
      color: ${({ theme }) => theme['base-subtitle']};
      ${mixins.fonts.textM};
    }

    span {
      ${mixins.fonts.textS};
    }
  }
`

export const ContentCoffe = styled.div``

export const CoffeCheckout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  border-radius: 6px 36px;

  background: ${({ theme }) => theme['base-card']};
`

export const CoffeList = styled.div`
  max-height: 400px;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    width: 10px; /* Largura da barra de rolagem vertical */
  }

  &::-webkit-scrollbar-track {
    background-color: transparent; /* Cor do fundo da barra de rolagem */
  }

  img {
    max-width: 64px;
  }

  > div {
    display: flex;
    gap: 50px;

    padding-bottom: 24px;
    border-bottom: 1px solid transparent;
    border-color: ${({ theme }) => theme['base-button']};
    margin-bottom: 24px;

    aside {
      ${mixins.fonts.textM};
      font-weight: bold;
    }
  }
`

export const CheckoutInputs = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > button {
    display: flex;
    align-items: center;
    gap: 4px;

    background: ${({ theme }) => theme['base-button']};
    border-radius: 6px;
    padding: 8px;

    ${mixins.fonts.buttonM};
    text-transform: uppercase;

    transition: all 0.2s;

    svg {
      color: ${({ theme }) => theme['purple-400']};
    }

    &:hover {
      background: ${({ theme }) => theme['base-hover']};
    }
  }
`

export const CardCoffe = styled.div`
  display: flex;
  gap: 20px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 8px;

    span {
      color: ${({ theme }) => theme['base-subtitle']};
    }
  }
`

export const OrderTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13.5px;

  margin-bottom: 24px;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      ${mixins.fonts.textS};
    }

    span {
      ${mixins.fonts.textM};
    }
  }

  > div:last-child {
    p {
      ${mixins.fonts.textL};
      font-weight: bold;
    }

    span {
      ${mixins.fonts.textL};
      font-weight: bold;
    }
  }
`

export const OrderButton = styled.button`
  border-radius: 6px;
  padding: 12px 117px;

  background: ${({ theme }) => theme['yellow-400']};
  color: ${({ theme }) => theme.white};

  ${mixins.fonts.buttonG};
  text-transform: uppercase;

  transition: all 0.2s;

  &:hover {
    background: ${({ theme }) => theme['yellow-700']};
  }
`
