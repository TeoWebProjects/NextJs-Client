import { ADD_TO_CART, REMOVE_PRODUCT, INIT_STORE } from './cart-actions'
const cartReducer = (state, action) => {
  switch (action.type) {
    case INIT_STORE:
      return action.value

    case ADD_TO_CART:
      const product = action.payload
      const existItem = state.cart.find((x) => x === product)
      if (existItem) {
        return {
          ...state,
          cart: state.cart.map((x) => (x === existItem ? product : x)),
        }
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        }
      }
    case REMOVE_PRODUCT:
      return {
        ...state,
        cart: state.cart.filter((product) => product !== action.payload),
      }

    default:
      return state
  }
}

export default cartReducer
