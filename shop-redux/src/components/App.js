import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
//Function that connects react with redux
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';

import ListadoProductos from './ListadoProductos';
import DetalleProducto from './DetalleProducto';
import Cesta from './Cesta';

import productos from '../devData/productos';

import * as actionCreators from '../actions/actionCreators';

import '../style/App.css';

class App extends Component {
	render() {
		const productoDetalle = productos.find(p => p.id === this.props.id_producto_detalle);
		const datosCesta = Object.values(this.props.cesta).map(linea => {
		const productoLinea = productos.find(p => p.id === linea.id_producto);
		return {
			id_producto: linea.id_producto,
			cantidad: linea.cantidad,
			nombre: productoLinea.nombre,
			precio: productoLinea.precio,
		}
		});

		const { contador } = this.props;
		const cargandoStyle = {
			display: this.props.cargando? 'block' : 'none'
		};
		return (
			<div>
				<div id='cargando' style={cargandoStyle} />
				<h1>
					{contador}
					<span onClick={this.props.incrementar} >+  </span>
					<span onClick={this.props.decrementar} >-  </span>
					<span onClick={() => this.props.incrementar(5)} >+5  </span>
					<span onClick={() => this.props.decrementar(5)} >-5  </span>
				</h1>
				<div id="app">
					<ListadoProductos productos={productos} handleProductoClick={this.props.setProductoDetalle}/>
					<Paper id="detalle" zDepth={3}>
							{productoDetalle
								?	<DetalleProducto {...productoDetalle}
										titulo={productoDetalle.nombre} 
										handleComprarClick={() => this.props.añadirACesta(this.props.id_producto_detalle) }/>
								: null
							}
					</Paper>
					<Cesta cesta={datosCesta} handleChangeCantidad={this.props.cambiarNumProductosCesta} > 
						<h3>Cupon de descuento aplicado</h3>
					</Cesta> 
				</div>
			</div>
		);
	}
}

//React-redux
const mapStateToProps = (state) => ({
	contador: state.counter,
	id_producto_detalle : state.id_producto_detalle,
	cesta: state.cesta,
	productos: state.productos,
	cargando: state.cargando
});
const mapDispatchToProps = (dispatch)=> bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);