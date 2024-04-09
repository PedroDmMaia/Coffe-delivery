import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Container = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem 0;

  div {
    display: flex;
    align-items: center;
    gap: 12px;

    div {
      display: flex;
      align-items: center;

      background: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple-400']};

      gap: 4px;
      padding: 8px;
      border-radius: 8px;
      font-weight: bold;
      ${mixins.fonts.textS};
    }

    a {
      background: ${(props) => props.theme['yellow-100']};
      padding: 8px;
      border-radius: 8px;
      line-height: 0;

      position: relative;

      span {
        ${mixins.fonts.textS}
        font-weight: bold;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 50%;
        padding: 8px;
        height: 20px;
        width: 20px;

        background: ${(props) => props.theme['yellow-700']};
        color: ${(props) => props.theme.white};

        position: absolute;
        top: 0;
        left: 50%;
        transform: translate(50%, -50%);
      }
    }
  }
`
