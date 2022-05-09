import { PAGE_DESC_URL } from "../constants";
import { authFetch } from "./authFetch";

export const getPageDesc = async (jwt) => {
  try {
    const result = await authFetch(PAGE_DESC_URL, jwt);
    return result;
  } catch (e) {
    console.error("Failed to get 'PageDesc'", e);
  }
};
