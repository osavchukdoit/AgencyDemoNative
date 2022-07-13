import { CLEAR_PAGE_DESC, SET_PAGE_DESC } from "../actionTypes";

const initialState = {
  pageDesc: null,
};

export const pageDescReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_PAGE_DESC:
      return {
        ...state,
        pageDesc: payload.PageDesc,
      };
    case CLEAR_PAGE_DESC:
      return {
        ...state,
        pageDesc: null,
      };
    default:
      return state;
  }
};
