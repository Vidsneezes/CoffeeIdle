import React, { Component } from 'react';
import './styles/Generator.css';

class Generator extends Component {
  render() {
      return (
        <div onClick={this.props.onClick} className="generator">
            <p>{this.props.name}</p>
            <p>{"Amount: " + this.props.amount}</p>
            <p>{"Producing: " + this.props.producing}</p>
            <p>{"Cost: " + this.props.nextCost}</p>
        </div>
    );
  }

}

export default Generator;
