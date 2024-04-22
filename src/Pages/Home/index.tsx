import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import heroImage from '../../assets/Hero/heroImagem.png'
import HeroBg from '../../assets/Hero/Background.svg'

import { Hero, HeroContent, Infos, Heading, CoffeeList } from './styles'
import { useTheme } from 'styled-components'
import { Card } from '../../components/Card'

import { Coffees } from '../../../data.json'

export function Home() {
  const theme = useTheme()

  return (
    <div>
      <Hero>
        <HeroContent>
          <div>
            <Heading>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </Heading>

            <Infos>
              <div>
                <ShoppingCart
                  size={32}
                  weight="fill"
                  style={{ backgroundColor: theme['yellow-700'] }}
                  color={theme.white}
                />
                <span>Compra simples e segura</span>
              </div>

              <div>
                <Package
                  size={32}
                  weight="fill"
                  style={{ backgroundColor: theme['base-text'] }}
                  color={theme.white}
                />
                <span> Embalagem mantém o café intacto</span>
              </div>

              <div>
                <Timer
                  size={32}
                  weight="fill"
                  style={{ backgroundColor: theme['yellow-400'] }}
                  color={theme.white}
                />
                <span>Entrega rápida e rastreada</span>
              </div>

              <div>
                <Coffee
                  size={32}
                  weight="fill"
                  style={{ backgroundColor: theme['purple-400'] }}
                  color={theme.white}
                />
                <span>O café chega fresquinho até você</span>
              </div>
            </Infos>
          </div>

          <img src={heroImage} alt="" />
        </HeroContent>

        <img src={HeroBg} id="heroBg" alt="" />
      </Hero>

      <CoffeeList>
        <h2>Nossos cafés</h2>

        <div>
          {Coffees.map((coffee) => (
            <Card key={coffee.id} coffee={coffee} />
          ))}
        </div>
      </CoffeeList>
    </div>
  )
}
