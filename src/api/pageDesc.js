import { GATEWAY_SERVICES_URL } from "../constants";
import { authFetch } from "./authFetch";

export const getPageDesc = async (jwt) => {
  try {
    const result = await authFetch(
      `${GATEWAY_SERVICES_URL}/metadataservice/find/content/PageDesc/EnrollProfile?media=json`,
      jwt
    );
    return result;
  } catch (e) {
    console.error("Failed to get 'PageDesc'", e);
  }
};
