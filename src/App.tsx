import { Component } from 'react';
import Viewer from './Viewer'
import './App.css';

class App extends Component {
  render () { 
    return (
      <div className="App">
        <Viewer id="MyViewerDiv"/>
        <Viewer id="viewer2"/>
      </div>
    );
  }
}

export default App;
