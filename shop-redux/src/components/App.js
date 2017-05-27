import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
//Function that connects react with redux
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';

import ListadoProductos from './ListadoProductos';
import DetalleProducto from './DetalleProducto';
import Cesta from './Cesta';

import productos from '../devData/productos';

import * as actionCreators from '../actions/actionCreators';

import '../style/App.css';

class App extends Component {
	render() {
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

		const renderContador = () => (
			<h1>
				{contador}
				<span onClick={this.props.incrementar} >+  </span>
				<span onClick={this.props.decrementar} >-  </span>
				<span onClick={() => this.props.incrementar(5)} >+5  </span>
				<span onClick={() => this.props.decrementar(5)} >-5  </span>
			</h1>
		);

		return (
			<Router>
			<div>
				<div id='cargando' style={cargandoStyle} />
				<Route path='/contador' render={renderContador} /> 
				<div id="app">
					<ListadoProductos productos={productos} />
					<Paper id="detalle" zDepth={3}>
						<Route path = '/detalle/:id' render={this.renderDetalle} />
					</Paper>
					<Cesta cesta={datosCesta} handleChangeCantidad={this.props.cambiarNumProductosCesta} > 
						<h3>Cupon de descuento aplicado</h3>
					</Cesta> 
				</div>
			</div>
			</Router>
		);
	}

	renderDetalle({ match }) {
		const { id } = match.params;
		const productoDetalle = productos.find(p => p.id === +id);
		return <DetalleProducto {...productoDetalle}
					titulo={productoDetalle.nombre} 
					handleComprarClick={() => this.props.añadirACesta(+id) }/>
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