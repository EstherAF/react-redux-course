import React, { Component } from 'react';
import GridTile from 'material-ui/GridList/GridTile';

class Producto extends Component {
  render() {
    return (
      <GridTile title={this.props.nombre} subtitle={this.props.precio + '€'}>
        <img src={'f/'+this.props.img} alt={this.props.nombre}/>
      </GridTile>
    );
  }
}

export default Producto;
