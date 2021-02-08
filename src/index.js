import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';

import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import theme from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Router>
        <App />
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
