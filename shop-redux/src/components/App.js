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
		this.setProductoDetalle = this.setProductoDetalle.bind(this);
		this.addDetalleToCesta = this.addDetalleToCesta.bind(this);
		this.actualizarCesta = this.actualizarCesta.bind(this);

		this.state = {
			productos,
			cesta: {
				1: {
					id_producto: productos[0].id, 
					cantidad: 2
				}
			},
			id_producto_detalle: productos[0].id
		};
	}
	render() {
		const productoDetalle = this.state.productos.find(p => p.id === this.state.id_producto_detalle);
		const datosCesta = Object.values(this.state.cesta).map(linea => {
			const productoLinea = this.state.productos.find(p => p.id === linea.id_producto);
			return {
				id_producto: linea.id_producto,
				cantidad: linea.cantidad,
				nombre: productoLinea.nombre,
				precio: productoLinea.precio,
			}
		});

		return (
			<div>
				<div id="app">
					<ListadoProductos productos={productos} handleProductoClick={this.setProductoDetalle}/>
					<Paper id="detalle" zDepth={3}>
						<DetalleProducto {...productoDetalle}
							titulo={productoDetalle.nombre} 
							handleComprarClick={this.addDetalleToCesta}/>
					</Paper>
					<Cesta cesta={datosCesta} handleChangeCantidad={this.actualizarCesta} > 
						<h3>Cupon de descuento aplicado</h3>
					</Cesta> 
				</div>
			</div>
		);
	}
	setProductoDetalle(id_producto){
		this.setState({
			id_producto_detalle: id_producto
		});
	}

	addDetalleToCesta(){
		this.setState((prevState)=>{
			const id_producto = prevState.id_producto_detalle;
			const linea = prevState.cesta[id_producto];
			const cantidad = linea? linea.cantidad + 1 : 1;
			return { 
				cesta: {
					...prevState.cesta,
					[id_producto]: { id_producto, cantidad }
				} 
			};
		});
	}

	actualizarCesta(id_producto, cantidad){
		this.setState((prevState)=>{
			const cesta = {...prevState.cesta};
			if(cantidad < 1 ){
				delete cesta[id_producto];
			} else {
				cesta[id_producto] = { id_producto, cantidad };
			}
			return { cesta };
		});
	}
}

export default App;