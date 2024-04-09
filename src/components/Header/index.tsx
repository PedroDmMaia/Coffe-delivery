import shortLogo from '../../assets/shortLogo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { Container } from './styles.ts'

export function Header() {
  return (
    <Container>
      <img src={shortLogo} alt="" />
      <div>
        <div>
          <MapPin size={24} color="#8047f8" weight="fill" />
          <p>Porto Alegre, RS</p>
        </div>
        <a>
          <ShoppingCart size={24} color="#c47f17" weight="fill" />
          <span>3</span>
        </a>
      </div>
    </Container>
  )
}
