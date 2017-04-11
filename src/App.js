import React, { Component } from 'react';
import update from 'immutability-helper';
import logo from './logo.svg';
import './App.css';
import ClickArea from './components/ClickArea.jsx';
import Generator from './components/Generator.jsx';
import idleData from './CoffeeData.json';

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

class App extends Component {
  constructor(props){
    super(props);
    const gens = {};
    arrayToDict(gens,idleData.generators);
    this.state = {
      cash: 0,
      totalCashCollected: "$ 000000000",
      generators:gens,
      cashPerSec:0,
      cashMax: 0
    };
    this.playerClicked = this.playerClicked.bind(this);
    this.generatorClick = this.generatorClick.bind(this);
  }

  updateCashDisplay(totalCash){
    var str = "" + Math.ceil(totalCash);
    var pad = "00000000";
    var tC = pad.substring(0,pad.length - str.length) + str;
    return  "$ "+tC;
  }

  playerClicked(){
    const totalCash = this.state.cash + (this.state.cashPerSec*0.04) + idleData.baseCash;
    const str = this.updateCashDisplay(totalCash);
    const cashMax = totalCash > this.state.cashMax ? totalCash : this.state.cashMax;
    this.setState({
      cash:totalCash,
      totalCashCollected: str,
      cashMax:cashMax
    });
    console.log(this.state);
  }

  generatorClick(generatorKey){
    const cost = calculateCost(this.state.generators[generatorKey].baseCost,this.state.generators[generatorKey].rate,this.state.generators[generatorKey].amount);
    if(this.state.cash > cost ){
      const newCash = this.state.cash - cost;
      const newAmount = this.state.generators[generatorKey].amount + 1;
      const gens = update(this.state.generators,{
        [generatorKey]: {amount:{$set: newAmount}} 
      });
      const str = this.updateCashDisplay(newCash);
      this.setState({
        cash:newCash,
        generators:gens,
        totalCashCollected: str,
      });
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    let cashAdd = 0;
    for(var key in this.state.generators){
      cashAdd = cashAdd + calculateProduction(this.state.generators[key]);
    }
    const totalCash = this.state.cash + cashAdd;
    const str = this.updateCashDisplay(totalCash);
    const cashMax = totalCash > this.state.cashMax ? totalCash : this.state.cashMax;
    this.setState({
      cash:totalCash,
      totalCashCollected: str,
      cashPerSec:cashAdd,
      cashMax: cashMax
    });
  }

  render() {
    const generators = idleData.generators.map((generator) =>{
        const cost = calculateCost(generator.baseCost,generator.rate,this.state.generators[generator.name].amount);
        const shouldDisable = this.state.cash < cost;
        const productionMax = calculateProduction(this.state.generators[generator.name]);
        return(<Generator key={generator.name}
                    text={generator.name}
                    cost={cost} 
                    onClick={()=>this.generatorClick(generator.name)}
                    amount={this.state.generators[generator.name].amount}
                    production={""+productionMax}
                    disabled={shouldDisable}
                    />
        );
    });

    return (
      <section className="container">
        <div className="game-area">
          <div className="click-holder">
            <h1 className="center">Coffee Idler</h1>
            <h2>{this.state.totalCashCollected}</h2>
            <ClickArea text={"Make Coffee"} handleClick={this.playerClicked}/>
          </div>
        </div>
        <div className="generator-dock">
          <div className="generator-holder">
            {generators}
          </div>
        </div>
      </section>
    );
  }
}

export default App;
