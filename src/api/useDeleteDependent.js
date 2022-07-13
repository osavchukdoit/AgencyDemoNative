import { useSelector } from "react-redux";
import { getSavePostUrl } from "../constants";
import { authFetch } from "./authFetch";

// TODO: implement to useSavePostModel
export const useDeleteDependent = () => {
  const { id, dependents } = useSelector((state) => state.domain);
  const { jwt } = useSelector((state) => state.utils);

  return async (dependentId) => {
    const url = getSavePostUrl(
      "hitf/gateway/services/dataservice/save/employer/Employee?media=json"
    );
    const uploadOptions = {
      body: JSON.stringify({
        id,
        dependents: [{ id: dependentId, deleteMark: true }],
      }),
    };
    const response = await authFetch(url, jwt, "POST", uploadOptions);
    console.log(
      "response=",
      response?.dependents.map(({ id, depFullName }) => ({ id, depFullName }))
    );
    return response;
  };
};
