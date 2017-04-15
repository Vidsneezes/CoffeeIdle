import React, { PropTypes } from 'react';

const Generator = ({name, amount, nextCost, Producing}) => {
    /* if(done === false)
     {
        gridPieces = grid.map((val,index) => 
            <InteractionBox key={index} indexPosition={index} />)
     }else{
         gridPieces = (
             <p>
             Game done
             </p>
         )
     }
     
     return (
        <div>
            {gridPieces}
        </div>
     )*/
}

BoardDisplay.propTypes = {
    grid: PropTypes.array,
    done: PropTypes.bool
}


export default BoardDisplay;
