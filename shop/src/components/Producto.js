import React, { Component } from 'react';
import {GridTile} from 'material-ui/GridList';
import PropTypes from 'prop-types';


const propTypes = {
    onClick: PropTypes.func.isRequired,
    precio:  PropTypes.number.isRequired,
    nombre:  PropTypes.string.isRequired,
    img:     PropTypes.string.isRequired,
};

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

Producto.propTypes = propTypes;
export default Producto;