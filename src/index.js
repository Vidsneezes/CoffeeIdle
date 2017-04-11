import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { reducers } from './reducers/index';

const store = createStore(reducers, initial_state);



ReactDOM.render(
  <App />,
  document.getElementById('root')
);
