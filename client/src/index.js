import './global.css'

import React from "react";
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk'
import { routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import App from './components/App'
import Reducers from './reducers/CombinedReducers'

import createHistory from 'history/createBrowserHistory'

import { fetchMe } from './actions/AsyncActions'

const history = createHistory()
const middlewares = [thunkMiddleware, routerMiddleware(history)]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(Reducers, composeEnhancers(applyMiddleware(...middlewares)))

window.store = store

// bootstrap state
store.dispatch(fetchMe());

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
