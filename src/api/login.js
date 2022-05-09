import { encode as btoa } from "base-64";
import { LOGIN_URL } from "../constants";

export const login = async ({ login, password }) => {
  const base64EncodedAuth = btoa(`${login}:${password}`);

  const headers = {
    Authorization: `Basic ${base64EncodedAuth}`,
    Accept: "application/json, text/javascript, */*; q=0.01",
  };

  try {
    const response = await fetch(LOGIN_URL, {
      headers: headers,
    });
    const result = await response.json();
    return result;
  } catch (e) {
    console.error("Login failed:", e);
  }
};
