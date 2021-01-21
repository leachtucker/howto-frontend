import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

import Fonts from './Fonts';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Fonts />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
