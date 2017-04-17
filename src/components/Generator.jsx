import React, { PropTypes } from 'react';

const Generator = ({name, amount, nextCost, producing}) => {
     return (
         <div>
            <p>{name}</p>
            <p>{"Amount: " + amount}</p>
            <p>{"Producing: " + producing}</p>
            <p>{"Cost: " + nextCost}</p>
        </div>
     )
}

Generator.propTypes = {
    name: PropTypes.string,
    producing: PropTypes.number,
    nextCost: PropTypes.number,
    amount: PropTypes.number
}


export default Generator;
