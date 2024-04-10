import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  background: ${(props) => props.theme['base-card']};

  padding: 20px;
  border-radius: 6px 36px;
  width: 256px;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
`

export const CoffeImg = styled.img`
  margin-top: -20%;
  max-width: 120px;
  max-height: 120px;
  align-self: center;
`

export const CoffeLabel = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 4px;

  span {
    background: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-700']};
    ${mixins.fonts.tag}
    text-transform: uppercase;

    padding: 4px 8px;
    border-radius: 20px;
  }
`

export const CoffeTitle = styled.h3`
  margin-top: 16px;
  ${mixins.fonts.titleS};
`

export const CoffeDescription = styled.span`
  margin-top: 8px;
  ${mixins.fonts.textS};
`

export const Control = styled.div`
  display: flex;
  align-items: center;
  gap: 23px;

  margin-top: 33px;

  div {
    display: flex;
  }
`

export const CoffePrice = styled.div`
  display: flex;
  align-items: baseline;

  gap: 3px;

  span:first-child {
    ${mixins.fonts.textS};
  }

  span:last-child {
    ${mixins.fonts.titleM};
  }
`

export const CoffeOrder = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > button {
    background: ${(props) => props.theme['purple-700']};
    color: ${(props) => props.theme.white};

    padding: 8px;
    border-radius: 6px;

    transition: all 0.2s;

    &:hover {
      background: ${(props) => props.theme['purple-400']};
    }
  }
`
