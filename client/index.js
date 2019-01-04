import React from 'react';
import ReactDOM from 'react-dom';
import store from './reducers';
import { Provider } from 'react-redux';


ReactDOM.render(
  <Provider store={store}>
    <div>Hello, world</div>,
  </Provider>,
  document.getElementById('app')
)
