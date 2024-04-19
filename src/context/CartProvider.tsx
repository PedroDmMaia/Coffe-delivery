import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { FormInputs } from '../Pages/Checkout'
import { CartReducer, Item, order } from '../reducers/Cart/reducers'
import {
  AddItemAction,
  RemoveItemAction,
  IncrementItemQuantityAction,
  DecrementItemQuantityAction,
  CheckoutCartAction
} from '../reducers/Cart/actions'
import { useNavigate } from 'react-router-dom'

interface CartContext {
  cart: Item[]
  orders: order[]
  addItem: (item: Item) => void
  removeItem: (itemId: Item['id']) => void
  incrementItemQuantity: (itemId: Item['id']) => void
  decrementItemQuantity: (itemId: Item['id']) => void
  checkout: (order: FormInputs) => void
}

export const CartContext = createContext({} as CartContext)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    CartReducer,
    {
      cart: [],
      orders: []
    },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0'
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return cartState
    }
  )
  const navigate = useNavigate()

  const { cart, orders } = cartState

  function addItem(item: Item) {
    dispatch(AddItemAction(item))
  }

  function removeItem(itemId: Item['id']) {
    dispatch(RemoveItemAction(itemId))
  }

  function checkout(order: FormInputs) {
    dispatch(CheckoutCartAction(order, navigate))
  }

  function incrementItemQuantity(itemId: Item['id']) {
    dispatch(IncrementItemQuantityAction(itemId))
  }

  function decrementItemQuantity(itemId: Item['id']) {
    dispatch(DecrementItemQuantityAction(itemId))
  }

  useEffect(() => {
    if (cartState) {
      const stateJson = JSON.stringify(cartState)

      localStorage.setItem('@coffee-delivery: cart-state-1.0.0', stateJson)
    }
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        incrementItemQuantity,
        decrementItemQuantity,
        checkout,
        orders,
        cart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
