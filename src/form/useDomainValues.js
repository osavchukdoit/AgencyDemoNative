import React from "react";
import { useSelector } from "react-redux";

export const useDomainValues = (fieldName) => {
  const { domain } = useSelector((state) => state);
  const domainValue = domain[fieldName];
  return { domainValue };
};
