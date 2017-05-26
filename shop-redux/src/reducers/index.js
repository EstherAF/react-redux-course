import counter from './counter';
import producto from './producto';
import cesta from './cesta';
import cargando from './cargando';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    counter,
    id_producto_detalle: producto,
    cesta,
    cargando
});


export default reducer;