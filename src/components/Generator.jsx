import React, { Component } from 'react';

class Generator extends Component {
  render() {
      return (
        <div>
            <p>{this.props.name}</p>
            <p>{"Amount: " + this.props.amount}</p>
            <p>{"Producing: " + this.props.producing}</p>
            <p>{"Cost: " + this.props.nextCost}</p>
        </div>
    );
  }

}

export default Generator;
