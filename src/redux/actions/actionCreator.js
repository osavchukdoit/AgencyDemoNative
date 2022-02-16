import {
  CLEAR_PAGE_DESC,
  SET_LOADER,
  SET_LOGGED_IN,
  SET_LOGGED_OUT,
  SET_PAGE_DESC,
  SET_TOKEN,
} from "../actionTypes";

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

/**
 * Stores the user's JWT.
 *
 * @param {string} payload user's JSON Web Token (jwt)
 * @return {{payload, type: string}}
 */
export const setToken = (payload) => ({ type: SET_TOKEN, payload });

/**
 * Stores the `PageDesc` data.
 *
 * @param {object} payload page desc details
 * @returns {{payload, type: string}}
 */
export const setPageDesc = (payload) => ({ type: SET_PAGE_DESC, payload });

/**
 * Clears the `PageDesc` data.
 *
 * @returns {{type: string}}
 */
export const clearPageDesc = () => ({ type: CLEAR_PAGE_DESC });
