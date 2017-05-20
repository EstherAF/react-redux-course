import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import '../style/Cesta.css';

import PropTypes from 'prop-types';

const propTypes = {
	handleChangeCantidad:   PropTypes.func.isRequired,
    cesta:                  PropTypes.arrayOf(PropTypes.shape({
        id_producto:            PropTypes.number.isRequired,
        cantidad:               PropTypes.number.isRequired,
        precio:                 PropTypes.number.isRequired, 
        nombre:                 PropTypes.string.isRequired
    })).isRequired  
};

class Cesta extends Component {
    render() {
        
        let total = 0;
        this.refLineas = {};

        const lineas = this.props.cesta.map((linea) => {
            total += linea.cantidad*linea.precio;

            return <TableRow key={linea.id_producto} >
                <TableRowColumn className="cesta_nombre">{linea.nombre}</TableRowColumn>
                <TableRowColumn>{linea.precio} €</TableRowColumn>
                <TableRowColumn>
                    <input type="number" min="0" max="99" value={linea.cantidad} 
                                onChange={(e)=> this.props.handleChangeCantidad(linea.id_producto, +e.target.value)} />
                </TableRowColumn>
                <TableRowColumn>{linea.precio * linea.cantidad} €</TableRowColumn>
            </TableRow> 
        });


        return (
            <div className="cesta">
                <Table selectable={false} fixedHeader={true}>
                    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn className="cesta_nombre">Nombre</TableHeaderColumn>
                            <TableHeaderColumn>PVP</TableHeaderColumn>
                            <TableHeaderColumn>Cantidad</TableHeaderColumn>
                            <TableHeaderColumn>Total</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {lineas}
                    </TableBody>
                </Table>
                <h3>Total: {total} €</h3>
            </div>
        );
    }
}
Cesta.propTypes = propTypes;
export default Cesta;