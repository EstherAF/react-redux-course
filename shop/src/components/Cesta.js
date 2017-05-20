import React, { Component } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import '../style/Cesta.css';

const CestaLinea = (props) => {
    return <TableRow >
        <TableRowColumn className="cesta_nombre">{props.nombre}</TableRowColumn>
        <TableRowColumn>{props.precio} €</TableRowColumn>
        <TableRowColumn><input type="number" min="0" max="99" defaultValue={props.cantidad} /></TableRowColumn>
        <TableRowColumn>{props.precio * props.cantidad} €</TableRowColumn>
    </TableRow> 
};

class Cesta extends Component {
    render() {
        
        let total = 0;
        const lineas = this.props.cesta.map((linea) => {
            total += linea.cantidad*linea.precio;
            return <CestaLinea key={linea.id_producto} nombre={linea.nombre} precio={linea.precio} cantidad={linea.cantidad} />
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

export default Cesta;