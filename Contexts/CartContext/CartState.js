import { useReducer, useState, useEffect } from 'react'
import CartContext from './cart-context'
import cartReducer from './cartReducer'
import { ADD_TO_CART, REMOVE_PRODUCT, INIT_STORE } from './cart-actions'

const CartState = ({ children }) => {
  const initialState = {
    cart: [],
  }
  const [state, dispatch] = useReducer(cartReducer, initialState)

  // add to cart
  const addToCart = (product) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    })
  }

  const removeProduct = (product) => {
    dispatch({
      type: REMOVE_PRODUCT,
      payload: product,
    })
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('cartItems'))) {
      //checking if there already is a state in localstorage
      //if yes, update the current state with the stored one
      dispatch({
        type: INIT_STORE,
        value: JSON.parse(localStorage.getItem('cartItems')),
      })
    }
  }, [])
  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem('cartItems', JSON.stringify(state))

      //create and/or set a new localstorage variable called "state"
    }
  }, [state])

  return <CartContext.Provider value={{ cart: state.cart, addToCart, removeProduct }}>{children}</CartContext.Provider>
}

export default CartState
