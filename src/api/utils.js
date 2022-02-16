export const unwrapResponse = async (response, responseType = "json") => {
  let result;
  switch (responseType) {
    case "json":
      result = await response.json();
      break;
    case "text":
      result = await response.text();
  }
  return result;
};
