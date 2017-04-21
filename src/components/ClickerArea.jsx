import React, { Component } from 'react';


class ClickerArea extends Component {
  render() {
      return (
        <div onClick={this.props.onClick}>
          <p>${this.props.totalCash}</p>
          <p>Click me</p>
          <p>${this.props.cashPreClick}</p>
        </div>
    );
  }

}

export default ClickerArea;