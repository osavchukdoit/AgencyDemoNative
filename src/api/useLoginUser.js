import React from "react";
import { useDispatch } from "react-redux";
import {
  setPageDesc,
  setToken,
  setUserModel,
} from "../store/actions/actionCreator";
import { getPageDesc } from "./pageDesc";

export const useLoginUser = () => {
  const dispatch = useDispatch();

  return async (userDetails) => {
    const { jwtToken } = userDetails?.HitfUser;
    dispatch(setUserModel(userDetails?.HitfUser));
    dispatch(setToken(jwtToken));
    try {
      const pageDesc = await getPageDesc(jwtToken);
      dispatch(setPageDesc(pageDesc));
    } catch (error) {
      console.error(`Page Desc error: ${error}`);
    }
  };
};
