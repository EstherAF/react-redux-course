import * as types from '../actions/types';

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case types.INC:
      return { counter: state.counter + action.value };

    case types.DEC:
      const counter = state.counter - action.value;
      return { counter: counter < 0 ? 0 : counter };

    default:
      return state;
      
  };
};

export default reducer;