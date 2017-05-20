import React, { Component } from 'react';
import '../style/App.css';
import Listado from './Listado.js';
import Detalle from './Detalle.js';
import Cesta from './Cesta.js';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Listado />
        <Detalle />
        <Cesta />
      </div>
    );
  }
}

export default App;
