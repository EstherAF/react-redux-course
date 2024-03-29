import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {LightBox, Box} from './component/Box';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Box name='powerful in red' color='red' showClickMessage='true'/>
        <Box name='powerful in green' color='green'/>
        <LightBox name='simple fast'/>    
      </div>
    );
  }
}

export default App;
