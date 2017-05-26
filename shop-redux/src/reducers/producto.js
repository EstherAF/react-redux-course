import * as types from '../actions/types';

const initialState = null;

//State is id of producto_detalle itself
const reducer = (state = initialState, action) => {
  switch (action.type) {

    case types.SET_PRODUCTO_DETALLE:
      return action.id;

    default:
      return state;

  }
};

export default reducer;