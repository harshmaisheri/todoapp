import { TODO } from "./types";

const INITIAL_STATE = {
  task: undefined,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TODO:
      return {
        ...state,
        task: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
