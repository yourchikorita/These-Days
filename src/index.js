import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import reducer from './reducer';
import {createStore,applyMiddleware} from 'redux';
import Root from './Root';
import logger from 'redux-logger';

let store = createStore(reducer,applyMiddleware(logger));
console.log('index = ',store.getState());

ReactDOM.render(<Root store={store} />, document.getElementById('root'));

