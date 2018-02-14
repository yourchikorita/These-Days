import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';
import Routers from './Routers';
import { Provider } from 'react-redux';
import reducer from './reducer';
import {createStore} from 'redux';
import SignIn from './components/SignIn/index'

let store = createStore(reducer);
console.log('index = ',store.getState());

ReactDOM.render(
<Provider store={store}><SignIn /></Provider>, document.getElementById('root'));

