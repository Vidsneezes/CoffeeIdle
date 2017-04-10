import React, { Component } from 'react';

class ButtonWidget extends Component {
    render() {
        return ( <button 
                    className = { this.props.style }
                    onClick = {() => this.props.onClick()} 
                 > 
                 { this.props.text } 
                 </button>
        )
    }
}

export default ButtonWidget;