import React, { Component } from 'react';
import {GridTile} from 'material-ui/GridList';

class Producto extends Component {
    render() {
        return (
            <GridTile onClick={this.props.onClick} 
                    title={this.props.nombre} 
                    subtitle={<span><b>{this.props.precio}</b>€</span>}>
                <img src={`/f/${this.props.img}`} alt={this.props.nombre} />
            </GridTile>
        );
    }
}

export default Producto;