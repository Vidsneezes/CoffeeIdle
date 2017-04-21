import React, { Component } from 'react';
import ClickerArea from './ClickerArea';
import LogicalMouseClick from '../container/LogicalMouseClick';
import GeneratorBox from '../container/GeneratorBox';


class App extends Component {
  
  render() {
    return (
     <div>
        <LogicalMouseClick />
        <GeneratorBox indexN = {1} />
     </div>
    );
  }

}

export default App;
