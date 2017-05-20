import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import '../style/Cesta.css';

class Cesta extends Component {
    render() {
        
        const producto = this.props.productos[0];
        const cantidad = 2;
        let lineas = [(
            <TableRow key={producto.id}>
                <TableRowColumn className="cesta_nombre">{producto.nombre}</TableRowColumn>
                <TableRowColumn>{producto.precio} €</TableRowColumn>
                <TableRowColumn><input type="number" min="0" max="99" defaultValue={cantidad} /></TableRowColumn>
                <TableRowColumn>{cantidad*producto.precio} €</TableRowColumn>
            </TableRow>
        )];

        const total = cantidad*producto.precio;
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

export default Cesta;