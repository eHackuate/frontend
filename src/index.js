import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import App from './app';
import reducers from './ducks/reducers';
import './index.css';

const store = createStore(
  combineReducers(reducers),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(<App store={store} />, document.querySelector('#app'));


