import React, { Component } from 'react';
import '../style/App.css';

import Paper from 'material-ui/Paper';

import ListadoProductos from './ListadoProductos';
import DetalleProducto from './DetalleProducto';
import Cesta from './Cesta';

import productos from '../devData/productos';


class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			productos,
			cesta: [{ 
					id_producto: productos[0].id, 
					cantidad: 2
			}],
			id_producto_detalle: productos[0].id
		}
	}
	render() {
		const productoDetalle = this.state.productos.find(p => p.id === this.state.id_producto_detalle);
		const datosCesta = this.state.cesta.map(linea => {
			const productoLinea = this.state.productos.find(p => p.id === linea.id_producto);
			return {
				id_producto: linea.id,
				cantidad: linea.cantidad,
				nombre: productoLinea.nombre,
				precio: productoLinea.precio,
			}
		});

		return (
			<div>
				<div id="app">
					<ListadoProductos productos={productos} />
					<Paper id="detalle" zDepth={3}>
						<DetalleProducto {...productoDetalle} />
					</Paper>
					<Cesta cesta={datosCesta} /> </div>
			</div>
		);
	}
}

export default App;