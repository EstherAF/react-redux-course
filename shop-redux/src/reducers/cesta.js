import * as types from '../actions/types';

const initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case types.AÑADIR_A_CESTA: {
      const id_producto = action.id;
      const linea = state[id_producto];
      const cantidad = linea ? linea.cantidad + 1 : 1;
      return { 
        ...state,
        [id_producto]: { 
          id_producto, 
          cantidad 
        }
      };
    }

    case types.CAMBIAR_NUM_PRODUCTOS_CESTA: {
      const id_producto = action.id;
      const cantidad = action.cantidad;
      const newState = {...state};
      if(cantidad < 1 )  
        delete newState[id_producto];
      else 
        newState[id_producto] = { id_producto, cantidad };
      return newState;
    }
    default:
      return state;

  }
};

export default reducer;