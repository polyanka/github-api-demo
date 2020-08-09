import { App } from '@src/App';
import { store } from '@src/store';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);
