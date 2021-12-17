import { ADD_TO_CART } from './cart-actions'
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const product = action.payload
      const existItem = state.cart.find((x) => x === product)
      if (existItem) {
        return {
          ...state,
          ...state.cart,
        }
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        }
      }

    default:
      return state
  }
}

export default cartReducer
