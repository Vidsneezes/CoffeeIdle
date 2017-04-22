import React, { Component } from 'react';
import GeneratorBox from '../container/GeneratorBox';


class GeneratorsDisplay extends Component {
  
  render() {
    const generators = this.props.gens.map((item,index) =>{
        console.log(" "+index + " " + item.get("name"));
        return <GeneratorBox key = {index} indexN = {index} gName = {item.name} />
    });

    return (
     <div>
        {generators}
     </div>
    );
  }

}

export default GeneratorsDisplay;
