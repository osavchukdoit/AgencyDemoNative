import React from "react";
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";

/**
 * Replace dynamic string inside `{}` with corresponding values
 * to form the appropriate URL.
 */
export const useFillDynamicValue = () => {
  const state = useSelector((state) => state);

  return (dynamicUrl) => {
    const dynamicFillerMatcher = /\{(.*?)\}/g;
    const fillerFields = dynamicUrl?.match(dynamicFillerMatcher);

    if (isEmpty(fillerFields)) return dynamicUrl;

    const replacedFields = fillerFields.map((field) =>
      field.replace(/\{/g, "").replace(/\}/g, "")
    );
    const stateData = replacedFields.map((field) => {
      let result = state;
      const splitArray = field.split(".");
      splitArray.forEach((item) => {
        result = result[item];
      });
      return result;
    });
    let resultUrl = dynamicUrl;
    fillerFields.map((matchedField, index) => {
      resultUrl = resultUrl.replace(matchedField, stateData[index]);
    });
    return resultUrl;
  };
};

export const useFillDynamicDomainField = () => {
  const { domain } = useSelector((state) => state);

  return (dynamicString) => {
    const dynamicFillerMatcher = /\{(.*?)\}/g;
    const fillerFields = dynamicString?.match(dynamicFillerMatcher);
    if (isEmpty(fillerFields)) return dynamicString;

    const replacedFields = fillerFields.map((field) =>
      field.replace(/\{/g, "").replace(/\}/g, "")
    );
    const domainData = replacedFields.map((field) => {
      let result = domain;
      const splitArray = field.split(".");
      splitArray.forEach((item) => {
        result = result[item];
      });
      return result;
    });
    let result = dynamicString;
    fillerFields.map((matchedField, index) => {
      result = result.replace(matchedField, domainData[index]);
    });
    return result;
  };
};
