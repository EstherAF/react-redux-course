import React, { Component } from 'react';
import {Card, CardActions, CardMedia, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import ShoppingBasket from 'material-ui/svg-icons/action/shopping-basket';
import '../style/Detalle.css';

class DetalleProducto extends Component {
    render() {
        return (
            <Card>
                <CardHeader title={this.props.titulo} subtitle={`${this.props.precio} €`} />
                <CardMedia>
                    <div className="detalle-img-container">
                        <img src={`/f/${this.props.img}`} alt={this.props.titulo} />
                    </div>
                </CardMedia>
                <CardActions>
                    <FlatButton label="Añadir" icon={<ShoppingBasket />} />
                </CardActions>
            </Card>
        );
    }
}

export default DetalleProducto;