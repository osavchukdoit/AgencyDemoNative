import { SET_DOMAIN_MODEL } from "../actionTypes";

const initialState = null;

export const domainModelReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DOMAIN_MODEL:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};
