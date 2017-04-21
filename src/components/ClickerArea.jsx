import React from 'react';
import ButtonWidget from './ButtonWidget.jsx';


class ClickerArea extends Component {
  render() {
    <div onClick={this.props.onClick}>
      <p>${this.props.totalCash}</p>
      <p>Click me</p>
      <p>${this.props.cashPreClick}</p>
    </div>
  }

}


export default ClickerArea;