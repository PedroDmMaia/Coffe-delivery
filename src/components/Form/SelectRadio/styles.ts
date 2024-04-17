import styled from 'styled-components'
import { mixins } from '../../../styles/mixins'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 16px;
  border-radius: 6px;
  border: 1px solid transparent;
  background: ${({ theme }) => theme['base-button']};
  color: ${({ theme }) => theme['base-text']};

  text-transform: uppercase;
  ${mixins.fonts.buttonM};

  transition: all 0.2s;

  &:hover {
    border-color: ${({ theme }) => theme['purple-400']};
  }

  &[data-state='true'] {
    border-color: ${({ theme }) => theme['purple-light']};
    color: ${({ theme }) => theme['purple-400']};
  }

  input {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme['purple-400']};
  }
`
