import { Component } from 'react';
import Viewer from './Viewer'
import './App.css';

class App extends Component {
  render () { 
    return (
      <div className="App">
        <Viewer id="viewer1"/>
        <Viewer id="viewer2"/>
      </div>
    );
  }
}

export default App;
