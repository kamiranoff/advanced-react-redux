import { SAVE_COMMENT } from './../actions/types';

export default function(state = [],action) {
  switch (action.type) {
    case SAVE_COMMENT :
      //create a new array instead of modyfying the existing one
      return [...state,action.payload]; // ES6 == return state.concat([action.payload.data]);

  }

  return state;
}