import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Hero = styled.section`
  position: relative;
  padding: 10rem 5.8rem;

  img#heroBg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    max-width: 100vw;
    max-height: 544px;
    object-fit: cover;
  }
`

export const HeroContent = styled.div`
  max-width: 1220px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 56px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 66px;
  }
`

export const Heading = styled.div`
  max-width: 588px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  h1 {
    ${mixins.fonts.titleXL};
    color: ${(props) => props.theme['base-title']};
  }

  p {
    ${mixins.fonts.textL};
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Infos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 12px;

  div {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  svg {
    padding: 8px;
    border-radius: 50%;
  }
`
