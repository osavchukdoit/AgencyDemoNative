import actionTypes from "./loginActionTypes"

export const isLogin = () => ({
  type: actionTypes.IS_LOGIN,
  payload: true,
});

export const isLogout = () => ({
  type: actionTypes.IS_LOGOUT,
  payload: false,
});
