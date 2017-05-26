import * as types from '../actions/types';

const initialState = 0;

//State is the counter itself
const reducer = (state = initialState, action) => {
  switch (action.type) {

    case types.INC:
      return state + action.value;

    case types.DEC:
      const counter = state - action.value;
      return counter < 0 ? 0 : counter;

    default:
      return state;

  }
};

export default reducer;