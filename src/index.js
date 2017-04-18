import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducers from './reducers/index';
import App from './App';
import './index.css';

let store = createStore(reducers);

console.log(store.getState().toJS());

/*ReactDOM.render(
  <div></div>,
  document.getElementById('root')
);*/
