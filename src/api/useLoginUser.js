import React from "react";
import { useDispatch } from "react-redux";
import { setPageDesc, setToken } from "../redux/actions/actionCreator";
import { getPageDesc } from "./pageDesc";

export const useLoginUser = () => {
  const dispatch = useDispatch();

  return (userDetails) => {
    const { jwtToken } = userDetails.HitfUser;
    dispatch(setToken(jwtToken));
    getPageDesc(jwtToken).then((pageDesc) => {
      dispatch(setPageDesc(pageDesc));
    });
  };
};
