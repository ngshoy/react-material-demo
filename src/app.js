import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import App from './components';
import theme from './theme';

render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <CssBaseline />
      <App / > 
    </BrowserRouter>
  </ThemeProvider> ,
  document.getElementById('app-root')
)
