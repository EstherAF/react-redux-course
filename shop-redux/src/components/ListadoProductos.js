import React, { Component } from 'react';
import Producto from './Producto';

import {GridList} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

import PropTypes from 'prop-types';
import {ProductoType} from '../propTypes';


const propTypes = {
	productos:              PropTypes.arrayOf(ProductoType)
};

class ListadoProductos extends Component {
    render() {

        const productos = this.props.productos.map(producto => 
            <Producto key={producto.id} 
                    {...producto} 
            />
        )
        return (
            <GridList cols={1} className="listado">
                <Subheader>Camisas</Subheader>
                {productos}
            </GridList>
        );
    }
}

ListadoProductos.propTypes = propTypes;
export default ListadoProductos;