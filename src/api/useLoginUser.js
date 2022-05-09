import React from "react";
import { useDispatch } from "react-redux";
import { setPageDesc, setToken } from "../redux/actions/actionCreator";
import { getPageDesc } from "./pageDesc";
import { getDomainModel } from "./domainModel";

export const useLoginUser = () => {
  const dispatch = useDispatch();

  return (userDetails) => {
    const { jwtToken } = userDetails?.HitfUser;
    dispatch(setToken(jwtToken));
    getPageDesc(jwtToken).then((pageDesc) => {
      dispatch(setPageDesc(pageDesc));
    });
    getDomainModel(
      "hitf/gateway/services/dataservice/find/employer/Employee/496975?media=json",
      jwtToken
    ).then((res) => {
      console.log("res=", res);
    });
  };
};
