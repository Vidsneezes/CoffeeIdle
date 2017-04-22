import React, { Component } from 'react';
import GeneratorBox from '../container/GeneratorBox';


class GeneratorDisplay extends Component {
  
  render() {
    const generators = this.props.gens.map((item,index) =>{
        return <GeneratorBox indexN = {index} gName = {item.name} />
    });

    return (
     <div>
        {generators}
     </div>
    );
  }

}

export default GeneratorDisplay;
