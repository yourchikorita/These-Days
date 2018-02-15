import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import reducer from './reducer';
import {createStore} from 'redux';
import Root from './Root';

let store = createStore(reducer);
console.log('index = ',store.getState());

ReactDOM.render(
	<Root store={store} />, document.getElementById('root'));

