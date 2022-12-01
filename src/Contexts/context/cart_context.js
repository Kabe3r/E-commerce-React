import React, { useEffect, useContext, useReducer } from 'react'
import reducer from '../reducer/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions';

const getLocalStorage = () => {
      let cart = localStorage.getItem('cart');
      if (cart) {
            return JSON.parse(localStorage.getItem('cart'));
      } else {
            return [];
      }
}


const initialState = {
      cart: getLocalStorage(),
      totalAmount: 0,
      totalItems: 0,
      shippingFees: 534
}

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
      const [state, dispatch] = useReducer(reducer, initialState);

      const addToCart = (id, color, amount, product) => {
            dispatch({ type: ADD_TO_CART, payload: { id, color, amount, product } });
      }

      const toggleAmount = (id, val) => {
            dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { id, val } });
      }

      const removeItem = (id) => {
            dispatch({ type: REMOVE_CART_ITEM, payload: id });
      }

      const clearCart = () => {
            dispatch({ type: CLEAR_CART });
      }

      useEffect(() => {
           dispatch({ type: COUNT_CART_TOTALS });
           localStorage.setItem('cart', JSON.stringify(state.cart));
      }, [state.cart]);

      return (
            <CartContext.Provider value={{
                  ...state,
                  addToCart,
                  removeItem,
                  toggleAmount,
                  clearCart
            }}>
                  {children}
            </CartContext.Provider>
      )
}

export const useCartContext = () => {
      return useContext(CartContext);
}
    