const SERVER_URL = "https://www.agencyezdev.com";
const SERVER_API_URL = `${SERVER_URL}/hitf`;
const GATEWAY_SERVICES_URL = `${SERVER_API_URL}/gateway/services`;
import { encode as btoa } from "base-64";

export const login = async ({ login, password }) => {
  const base64EncodedAuth = btoa(`${login}:${password}`);

  const headers = {
    Authorization: `Basic ${base64EncodedAuth}`,
    Accept: "application/json, text/javascript, */*; q=0.01",
  };

  try {
    const response = await fetch(
      `${GATEWAY_SERVICES_URL}/authservice/authenroller?media=json`,
      {
        headers: headers,
      }
    );
    const result = await response.json();
    console.log("result=", result);
  } catch (e) {
    console.log("fetch error:", e);
  }
};
