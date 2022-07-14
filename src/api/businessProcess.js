import { authFetch } from "./authFetch";

/**
 * Obtains business process data.
 *
 * @param {string} jwt user's JSON Web Token
 * @param {string} BPUrl business process URL
 * @returns {Promise<*>}
 */
export const getBP = async (jwt, BPUrl) => {
  try {
    const result = authFetch(BPUrl, jwt);
    return result;
  } catch (error) {
    console.log("Failed to get 'BP'", error);
  }
};
