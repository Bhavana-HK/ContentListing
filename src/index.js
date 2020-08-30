import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './Styles/main.css'
import store from './Store';
import App from './Components/App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
