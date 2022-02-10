import { combineReducers } from "redux";
import actionTypes from "./loginActionTypes";

const initialState = false;

const isLogin = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.IS_LOGIN:
      return payload;

    case actionTypes.IS_LOGOUT:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  isLogin,
});
