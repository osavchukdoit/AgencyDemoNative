import { authFetch } from "./authFetch";

export const savePostModel = (blockIdentifier, postModel, jwt, savePostUrl) => {
  const url =
    "https://www.aezbenefitsdev2.com/hitf/gateway/services/dataservice/save/employer/Employee?media=json";
  console.info(`Saving model for "${blockIdentifier}"`);
  const uploadOptions = { body: JSON.stringify(postModel) };
  return authFetch(savePostUrl, jwt, "POST", uploadOptions);
};
