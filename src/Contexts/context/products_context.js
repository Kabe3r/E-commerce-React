import React, { useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import reducer from '../reducer/products_reducer';
import {
      SIDEBAR_OPEN,
      SIDEBAR_CLOSE,
      GET_PRODUCTS_BEGIN,
      GET_PRODUCTS_SUCCESS,
      GET_PRODUCTS_ERROR,
      GET_SINGLE_PRODUCT_BEGIN,
      GET_SINGLE_PRODUCT_SUCCESS,
      GET_SINGLE_PRODUCT_ERROR,
} from '../actions';

const initialState = {
      products: [],
      productsError: false,
      productsLoading: false,
      featuredProducts: [],
      singleProduct: {},
      singleProductLoading: false,
      singleProductError: false,
      isSidebarOpen: false,
}

const ProductsContext = React.createContext();

const url = process.env.REACT_APP_PRODUCTS_URL;


export const ProductsProvider = ({ children }) => {
      const [state, dispatch] = useReducer(reducer, initialState);

      const fetchProducts = async (url) => {
            dispatch({ type: GET_PRODUCTS_BEGIN });

            try {
                  const response = await axios.get(url);
                  const products = await response.data;
                  dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
            }
            catch (err) {
                  dispatch({ type: GET_PRODUCTS_ERROR });
            }

      }

      const fetchSingleProduct = async (url) => {
            dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });

            try {
                  const response = await axios.get(url);
                  const singleProduct = await response.data;
                  console.log(singleProduct)
                  dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct })
            }
            catch (err) {
                  dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
            }
      }

      const openSidebar = () => {
            dispatch({ type: SIDEBAR_OPEN });
      }

      const closeSidebar = () => {
            dispatch({ type: SIDEBAR_CLOSE });
      }

      useEffect(() => {
            fetchProducts(url);
      }, []);

      return (
            <ProductsContext.Provider value={{
                  ...state,
                  fetchSingleProduct,
                  openSidebar,
                  closeSidebar
            }}>
                  {children}
            </ProductsContext.Provider>
      )
}

export const useProductsContext = () => {
      return useContext(ProductsContext);
}