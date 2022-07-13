import { SET_USER_MODEL } from "../actionTypes";

const initialState = null;

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_USER_MODEL:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
