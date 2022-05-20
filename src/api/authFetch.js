import { unwrapResponse } from "./utils";

const defaultHeaders = () => ({ "Content-Type": "application/json" });

const defaultOptions = (method = "GET") => ({
  headers: defaultHeaders(),
  method,
});

export const authFetch = async (
  url,
  jwt,
  method = "GET",
  options,
  responseType = "json"
) => {
  if (!options) options = defaultOptions(method);
  if (!options.headers) options.headers = defaultHeaders();
  if (!options.headers["Authorization"]) options.headers["Authorization"] = jwt;
  if (!options.method) options.method = method;
  console.info("url=", url);
  console.info("options=", options);
  const response = await fetch(url, options);
  const result = unwrapResponse(response, responseType);
  return result;
};
