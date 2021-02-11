import App from './App';

import React from 'react';
import ReactDOM from 'react-dom';

import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import theme from './theme';

import { BrowserRouter as Router } from 'react-router-dom';

import store from './store/';
import { Provider } from 'react-redux';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Router>
          <App />
        </Router>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
