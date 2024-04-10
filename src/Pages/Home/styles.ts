import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const Hero = styled.section`
  position: relative;
  padding: 5.8rem 0;
  max-height: 544px;

  img#heroBg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    object-fit: cover;
  }
`

export const HeroContent = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
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

export const CoffeeList = styled.section`
  max-width: 1220px;
  padding: 32px 20px 150px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 54px;

  > h2 {
    ${mixins.fonts.titleL}
  }

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-row-gap: 40px;
    grid-column-gap: 32px;
  }
`
