import { SET_BP } from "../actionTypes";

const initialState = null;

export const bpReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_BP:
      return {
        ...payload,
      };
    default:
      return state;
  }
};
