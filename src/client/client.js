// Starting point for the client side app
// import 'babel-polyfill';
import './styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Loadable from 'react-loadable';

import reducers from './reducers';
import Routes from './Routes';

const store = createStore(reducers, window.INITIAL_STATE, applyMiddleware(thunk));

Loadable.preloadReady().then(() => {
  console.log('preload ready clientjs');
  ReactDOM.hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <div>{renderRoutes(Routes)}</div>
      </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
  )
});
