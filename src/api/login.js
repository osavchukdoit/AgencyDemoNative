const SERVER_URL = "https://www.agencyezdev.com";
const SERVER_API_URL = `${SERVER_URL}/hitf`;
const GATEWAY_SERVICES_URL = `${SERVER_API_URL}/gateway/services`;

export const login = async ({ login, password }) => {
  const base64EncodedAuth = btoa(`${login}:${password}`);
  console.log(base64EncodedAuth)
  // const base64EncodedAuth = `${login}:${password}`;

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
    console.log(response);
  } catch (e) {
    console.log("fetch error:", e);
  }
};
