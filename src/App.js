import React, { Component } from 'react';
import update from 'immutability-helper';
import logo from './logo.svg';
import './App.css';
import idleData from './CoffeeData.json';

function arrayToDict(obj,arr){
  arr.forEach(function(item){
    obj[item.name] = item;
  });
}

class ButtonWidget extends Component{
  render(){
    return(
      <button className={this.props.style} onClick={()=>this.props.onClick()}>
      {this.props.text}
      </button>
    );
  }
}

class Generator extends Component {
  render(){
    return(
      <button className="rectangle" onClick={()=>this.props.onClick()}>
        <span className="rectangle-amount">{this.props.amount}</span>
        <span className="rectangle-name">{this.props.text}</span>
        <span className="rectangle-cost">{"1x"+this.props.cost}</span>
      </button>
    );
  }
}

class ClickArea extends Component{
  render(){
    return (
      <ButtonWidget text={this.props.text} style="square" onClick={this.props.handleClick} />
    );
  }
}

class App extends Component {
  constructor(props){
    super(props);
    const gens = {};
    arrayToDict(gens,idleData.generators);
    console.log(gens);
    this.state = {
      cash: 0,
      totalCashCollected: "$ 000000000",
      generators:gens
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
    const totalCash = this.state.cash + idleData.baseCash;
    const str = this.updateCashDisplay(totalCash);
    this.setState({
      cash:totalCash,
      totalCashCollected: str
    });
  }

  generatorClick(generatorKey){
    if(this.state.cash > this.state.generators[generatorKey].baseCost * this.state.generators[generatorKey].rate){
      const newAmount = this.state.generators[generatorKey].amount + 1;
      const gens = update(this.state.generators,{
        [generatorKey]: {amount:{$set: newAmount}} 
      });
      const newCash = this.state.cash - this.state.generators[generatorKey].baseCost * this.state.generators[generatorKey].rate;
      const str = this.updateCashDisplay(newCash);
      this.setState({
        cash:newCash,
        generators:gens,
        totalCashCollected: str
      });
    }
  }

  render() {
    const generators = idleData.generators.map((generator) =>
    // Correct! Key should be specified inside the array.
      <Generator key={generator.name}
                 text={generator.name}
                 cost={generator.baseCost * generator.rate} 
                 onClick={()=>this.generatorClick(generator.name)}
                 amount={this.state.generators[generator.name].amount}
                 />
    );

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{idleData.name}</h2>
        </div>
        <div className="Click-Area">
          <span className="Click-Area-Square">
            <ClickArea text="Click Me" handleClick={this.playerClicked}/>
          </span>
          <h2>{this.state.totalCashCollected}</h2>
        </div>
        <div className="Generator">
          {generators};
        </div>
     </div>
    );
  }
}

export default App;
