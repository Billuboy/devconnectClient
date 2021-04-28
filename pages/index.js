import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import jwt_decode from 'jwt-decode';

import App from '../components/app';
import Reducers from '../reducers/reducersIndex';
import { SIGN_IN } from '../actions/actionTypes';
import apiConfig from '../api/axiosConfig';

const composeEnhancer = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducers, composeEnhancer(applyMiddleware(thunk)));

if (typeof window !== 'undefined') {
  if (localStorage.jwtToken) {
    const tokenInfo = jwt_decode(localStorage.jwtToken);
    apiConfig(localStorage.jwtToken);

    store.dispatch({
      type: SIGN_IN,
      payload: tokenInfo,
    });
  }
}

function Index() {
  return (
    <ChakraProvider portalZIndex="10">
      <CSSReset />
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  );
}

export default Index;
