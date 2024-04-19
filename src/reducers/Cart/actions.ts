import { NavigateFunction } from 'react-router-dom'
import { FormInputs } from '../../Pages/Checkout'
import { Item } from './reducers'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
  DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
  CHECKOUT_CART = 'CHECKOUT_CART'
}

export type Actions =
  | {
      type: ActionTypes.ADD_ITEM
      payload: {
        item: Item
      }
    }
  | {
      type:
        | ActionTypes.DECREMENT_ITEM_QUANTITY
        | ActionTypes.INCREMENT_ITEM_QUANTITY
        | ActionTypes.REMOVE_ITEM
      payload: {
        itemId: Item['id']
      }
    }
  | {
      type: ActionTypes.CHECKOUT_CART
      payload: {
        order: FormInputs
        callback: NavigateFunction
      }
    }

export function AddItemAction(item: Item) {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      item
    }
  } satisfies Actions
}

export function RemoveItemAction(itemId: Item['id']) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId
    }
  } satisfies Actions
}

export function IncrementItemQuantityAction(itemId: Item['id']) {
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: {
      itemId
    }
  } satisfies Actions
}

export function DecrementItemQuantityAction(itemId: Item['id']) {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: {
      itemId
    }
  } satisfies Actions
}

export function CheckoutCartAction(
  order: FormInputs,
  callback: NavigateFunction
) {
  return {
    type: ActionTypes.CHECKOUT_CART,
    payload: {
      order,
      callback
    }
  } satisfies Actions
}
