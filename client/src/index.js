import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Router from './Router';
import { Store } from './storeConfig'

ReactDOM.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>

, document.getElementById('root'));