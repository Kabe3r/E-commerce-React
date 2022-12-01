import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProductsProvider } from './Contexts/context/products_context';
import { FilterProvider } from './Contexts/context/filter_context';
import { CartProvider } from './Contexts/context/cart_context';
import { UserProvider } from './Contexts/context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
  domain={process.env.REACT_APP_DOMAIN_ID}
  clientId={process.env.REACT_APP_CLIENT_ID}
  redirectUri={window.location.origin}
  cacheLocation='localstorage'
>
  <UserProvider>
    <ProductsProvider>
      <FilterProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </FilterProvider>
    </ProductsProvider>
  </UserProvider>
  </Auth0Provider>
);

