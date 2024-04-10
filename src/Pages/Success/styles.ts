import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  margin-top: 80px;

  h2 {
    ${mixins.fonts.titleL}
    color: ${(props) => props.theme['yellow-700']};
  }

  > span {
    ${mixins.fonts.textL};
    color: ${(props) => props.theme['base-subtitle']};
  }

  > div {
    display: flex;
    margin-top: 40px;
    gap: 102px;
  }
`

export const DeliveryInformation = styled.div`
  width: 100%;
  border-radius: 6px 36px;
  border: 1px solid;
  border-color: transparent;

  background-origin: border-box;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right, ${theme['yellow-400']}, ${theme['purple-400']})`};
`

export const DeliveryInformationContent = styled.div`
  padding: 40px;
  height: 100%;

  border-radius: 6px 36px;
  background-color: white;

  display: flex;
  flex-direction: column;
  gap: 32px;

  > div {
    display: flex;
    align-items: center;
    gap: 12px;

    svg {
      border-radius: 50%;
      padding: 8px;
    }
  }

  > div div {
    display: flex;
    flex-direction: column;
  }
`
