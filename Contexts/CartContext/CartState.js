import { useReducer } from 'react'
import CartContext from './cart-context'
import cartReducer from './cartReducer'
import { ADD_TO_CART } from './cart-actions'

const CartState = ({ children }) => {
  const initialState = {
    cart: [],
  }

  // add to cart
  const addToCart = (product) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    })
  }

  const [state, dispatch] = useReducer(cartReducer, initialState)

  return <CartContext.Provider value={{ cart: state.cart, addToCart }}>{children}</CartContext.Provider>
}

export default CartState
