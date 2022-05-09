import { dropdownStaticUrl } from "../constants";
import { authFetch } from "./authFetch";

export const getValidValues = async (jwt, propName) => {
  try {
    const values = await authFetch(dropdownStaticUrl(propName), jwt);
    const result = values.ValidValues.ValidValue;
    return result;
  } catch (e) {
    console.error("Failed to get 'ValidValues'", e);
  }
};
