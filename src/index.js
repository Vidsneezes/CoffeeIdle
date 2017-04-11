import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { reducers } from './reducers/index';
import idleData from './CoffeeData.json';


const initial_state = {
    cash: 0,
    totalCashCollected: "$ 000000000",
    generators:gens,
    cashPerSec:0,
    cashMax: 0
};

const store = createStore(reducers, initial_state);



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


function arrayToDict(obj,arr){
  arr.forEach(function(item){
    obj[item.name] = item;
  });
}

function calculateCost(baseCost,rate,owned){
  return Math.round((baseCost * Math.pow(rate,owned) * 100)) /100;
}

function calculateProduction(generator){
  return generator.productionBase * generator.amount;
}