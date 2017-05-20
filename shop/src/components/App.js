import React, { Component } from 'react';
import '../style/App.css';

import Paper from 'material-ui/Paper';

import ListadoProductos from './ListadoProductos';
import DetalleProducto from './DetalleProducto';
import Cesta from './Cesta';


class App extends Component {
	render() {
		return (
			<div>
				<div id="app">
					<ListadoProductos productos={this.props.productos} />
					<Paper id="detalle" zDepth={3}>
						<DetalleProducto {...this.props.productos[0]} />
					</Paper>
					<Cesta productos={this.props.productos} /> </div>
			</div>
		);
	}
}

export default App;