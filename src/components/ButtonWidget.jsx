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

ButtonWidget.propTypes = {
    onClick: PropTypes.func,
    style: PropTypes.string,
    text: PropTypes.string
}

export default ButtonWidget;