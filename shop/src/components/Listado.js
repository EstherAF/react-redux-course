import React, { Component } from 'react';
import Producto from './Producto';
import productos from '../devData/productos';
import GridList from 'material-ui/GridList'

class Listado extends Component {
  render() {

    return (
      <GridList cols={1} className='listado'>
        <h1>Listado</h1>
        {
          productos.map((producto) => 
            <Producto 
              key={producto.id}
              {...producto} 
            />
            /*
            El operador {...someObject} crea un clave-valor por cada propiedad de someObject.
            Lo de arriba es igual a poner: nombre=producto.nombre precio=producto.precio etc
            */
          )
        }
      </GridList>
    );
  }
}

export default Listado;
