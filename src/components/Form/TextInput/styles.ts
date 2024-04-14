import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme['base-button']};
  border-radius: 8px;
  background: ${(props) => props.theme['base-input']};

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;

  transition: all 0.2s;

  &[data-state='Focused'] {
    border-color: ${({ theme }) => theme['yellow-700']};
  }

  &[data-state='Blurred'] {
    border-color: ${({ theme }) => theme['base-button']};
  }

  input {
    width: 100%;

    border: none;
    background: transparent;
    outline: none;

    color: ${({ theme }) => theme['base-text']};

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }
  }

  span {
    color: ${({ theme }) => theme['base-label']};
    padding-right: 12px;
    ${mixins.fonts.textS};
    font-style: italic;
  }
`
