import * as types from './types';

export const increment = (value = 1) => ({
    type: types.INC,
    value
});

export const decrement = (value = 1) => ({
    type: types.DEC,
    value
});