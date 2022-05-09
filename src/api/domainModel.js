import { domainModelUrl } from "../constants";
import { authFetch } from "./authFetch";

export const getDomainModel = async (datamodelFindGETURL, jwt) => {
  try {
    const result = await authFetch(domainModelUrl(datamodelFindGETURL), jwt);
    console.log("getDomainModel=", result);
    return result;
  } catch (e) {
    console.error("Failed to get 'DomainModel'", e);
  }
};
