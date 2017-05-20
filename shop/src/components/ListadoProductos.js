import React, { Component } from 'react';
import Producto from './Producto';

import {GridList} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

class ListadoProductos extends Component {
    render() {

        const productos = this.props.productos.map(producto => 
            <Producto key={producto.id} 
                    {...producto}
                    onClick={() => this.props.handleProductoClick(producto.id) } 
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

export default ListadoProductos;