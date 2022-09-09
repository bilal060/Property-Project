import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import './styles/app.css';

import { Router as RouterHistory } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
