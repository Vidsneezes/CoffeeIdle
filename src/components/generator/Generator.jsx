import React, { Component } from 'react';

class Generator extends Component {
  render(){
    let buttonStatus = "";
    if(this.props.disabled){
      buttonStatus = "-dis";
    }

    return(
      <section className="generator-container">
        <div className="generatorcontent-right">
          <button className="rectangle" onClick={()=>this.props.onClick()} disabled={this.props.disabled}>
           Buy
          </button>
        </div>
        <div className="generatorcontent-left">
          <h5 className="center">Owned:{this.props.amount}</h5>
          <p className="center">{this.props.text}</p>
          <p className="center">{"costs: "+this.props.cost}</p>
          <p className="center">{this.props.production+"$/s"}</p>
        </div>
      </section>
    );
  }
}

export default Generator;