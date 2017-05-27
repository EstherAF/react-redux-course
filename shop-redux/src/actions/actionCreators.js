import * as types from './types';

export const increment = (value = 1) => ({
    type: types.INC,
    value
});

export const decrement = (value = 1) => ({
    type: types.DEC,
    value
});

export const cambiarNumProductosCesta = (id, cantidad) => ({
    type: types.CAMBIAR_NUM_PRODUCTOS_CESTA,
    id,
    cantidad
});

export const mostrarCargando = () => ({
    type: types.MOSTRAR_CARGANDO
});

export const ocultarCargando = () => ({
    type: types.OCULTAR_CARGANDO
});

export const añadirACestaSync = (id) => ({
    type: types.AÑADIR_A_CESTA,
    id
});

export const añadirACesta = (id) => {
    return (dispatch) => new Promise((resolve, reject) => {
        dispatch(mostrarCargando());
        setTimeout(() => {
            dispatch(añadirACestaSync(id));
            dispatch(ocultarCargando());
            resolve();
        }, 2000);
    });
};