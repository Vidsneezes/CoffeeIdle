import React, { Component } from 'react';
import ButtonWidget from './ButtonWidget.jsx';

class ClickArea extends Component{
  render(){
    return (
      <ButtonWidget text={this.props.text} style="square" onClick={this.props.handleClick} />
    );
  }
}

export default ClickArea;