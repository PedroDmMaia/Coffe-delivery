import shortLogo from '../../assets/shortLogo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { Container } from './styles.ts'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={shortLogo} alt="" />
      </Link>
      <div>
        <div>
          <MapPin size={24} color="#8047f8" weight="fill" />
          <p>Porto Alegre, RS</p>
        </div>
        <Link to="/checkout">
          <ShoppingCart size={24} color="#c47f17" weight="fill" />
          <span>3</span>
        </Link>
      </div>
    </Container>
  )
}
