import React, { Component } from 'react';
import {GridTile} from 'material-ui/GridList';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const propTypes = {
    id:      PropTypes.number.isRequired,
    precio:  PropTypes.number.isRequired,
    nombre:  PropTypes.string.isRequired,
    img:     PropTypes.string.isRequired,
};

class Producto extends Component {
    render() {
        return (
            <Link to={`/detalle/${this.props.id}`}>
                <GridTile
                        title={this.props.nombre} 
                        subtitle={<span><b>{this.props.precio}</b>€</span>}>
                    <img src={`/f/${this.props.img}`} alt={this.props.nombre} />
                </GridTile>
            </Link>

        );
    }
}

Producto.propTypes = propTypes;
export default Producto;