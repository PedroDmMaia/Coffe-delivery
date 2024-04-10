import styled from 'styled-components'

export const Container = styled.div`
  background: ${(props) => props.theme['base-button']};
  border-radius: 8px;

  display: flex;
  align-items: center;
  gap: 4px;

  button {
    background: transparent;
    padding: 8px;

    svg {
      color: ${(props) => props.theme['purple-400']};
      transition: all 0.2s;

      &:hover {
        color: ${(props) => props.theme['purple-700']};
      }
    }
  }

  span {
    color: ${(props) => props.theme['base-title']};
  }
`
