import { SET_LOADER, SET_LOGGED_IN, SET_LOGGED_OUT } from "../actionTypes";

/**
 * Sets user logged in, store user's first name.
 *
 * @param {string} payload user's first name
 * @return {{payload, isLogged: boolean, type: string}}
 */
export const setLoggedIn = (payload) => ({
  type: SET_LOGGED_IN,
  isLogged: true,
  payload,
});

/**
 * Sets user logged out.
 *
 * @return {{type: string}}
 */
export const setLoggedOut = () => ({ type: SET_LOGGED_OUT });

/**
 * Shows/hides loader with specific text.
 *
 * @param {{visible: boolean, text: string}} payload loader details
 * @return {{payload, type: string}}
 */
export const setLoader = (payload) => ({ type: SET_LOADER, payload });
