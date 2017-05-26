import * as types from '../actions/types';

const reducer = (state = false, action) => {
    switch (action.type) {
        case types.MOSTRAR_CARGANDO:
            return true;
        case types.OCULTAR_CARGANDO:
            return false;
        default:
            return state;
    }
};

export default reducer;