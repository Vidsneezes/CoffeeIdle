import React, { Component } from 'react';
import LogicalMouseClick from '../container/LogicalMouseClick';
import GeneratorManager from '../container/GeneratorManager';


class App extends Component {
  
  render() {
    return (
     <div>
        <LogicalMouseClick />
        <GeneratorManager />
     </div>
    );
  }

}

export default App;
