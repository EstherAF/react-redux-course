import counter from './counter';
import cesta from './cesta';
import cargando from './cargando';
import { combineReducers } from 'redux';

const reducer = combineReducers({
    counter,
    cesta,
    cargando
});


export default reducer;