import React, { Component } from 'react';
import LogicalMouseClick from '../container/LogicalMouseClick';
import GeneratorBox from '../container/GeneratorBox';


class App extends Component {
  
  render() {
    return (
     <div>
        <LogicalMouseClick />
        <GeneratorBox indexN = {0}  />
     </div>
    );
  }

}

export default App;
