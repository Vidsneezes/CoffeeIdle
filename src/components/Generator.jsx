<<<<<<< HEAD
import React, { PropTypes } from 'react';

const Generator = ({name, amount, nextCost}) => {
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
=======
import React, { Component } from 'react';

class Generator extends Component {
  render(){
    let buttonStatus = "";
    if(this.props.disabled){
      buttonStatus = "-dis";
    }

    return(
      <section className="generator-container">
        <div className="generatorcontent-right">
          <button className="rectangle" onClick={()=>this.props.onClick()} disabled={this.props.disabled}>
           Buy
          </button>
        </div>
        <div className="generatorcontent-left">
          <h5 className="center">Owned:{this.props.amount}</h5>
          <p className="center">{this.props.text}</p>
          <p className="center">{"costs: "+this.props.cost}</p>
          <p className="center">{this.props.production+"$/s"}</p>
        </div>
      </section>
    );
  }
}

export default Generator;
>>>>>>> e0a1fe127b7e29936ae408f66f14d7d156ea312c
