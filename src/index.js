import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducers from './reducers/index';
import App from './components/App';
import './index.css';
import {changeBuyAmount, increaseClick, buyGenerator, increaseTick} from './actions/index';

let store = createStore(reducers);

console.log(store.getState().toJS());

let unsubscribe = store.subscribe(() => 
  console.log(store.getState().toJS())
)

store.dispatch(increaseClick());
store.dispatch(buyGenerator());
store.dispatch(increaseTick());


unsubscribe();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
