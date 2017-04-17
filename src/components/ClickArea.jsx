import React, { PropTypes } from 'react';
import ButtonWidget from './ButtonWidget.jsx';

const ClickArea = ({text, style, onClick}) => {
  return (
    <ButtonWidget text={text} style={style} onClick={onClick} />
  )
}

ClickArea.propTypes = {
    onClick: PropTypes.func,
    style: PropTypes.string,
    text: PropTypes.string
}

export default ClickArea;