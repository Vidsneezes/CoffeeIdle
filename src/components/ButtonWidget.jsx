import React, { PropTypes } from 'react';

const ButtonWidget = ({onClick, style, text}) => {
    return (
        <button 
            className= {style}
            onClick = {onClick}
        >
        {text}
        </button>
     )
}

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

ButtonWidget.propTypes = {
    onClick: PropTypes.func,
    style: PropTypes.string,
    text: PropTypes.string
}

export default ButtonWidget;