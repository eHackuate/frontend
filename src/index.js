import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import App from './app';
import reducers from './ducks/reducers';
import './index.css';


import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();
const store = createStore(
  combineReducers(reducers),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <App store={store} />
    </MuiThemeProvider>, document.querySelector('#app'));


