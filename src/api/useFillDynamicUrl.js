import React from "react";
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";

/**
 * Replace dynamic string inside `{}` with corresponding values
 * to form the appropriate URL.
 */
export const useFillDynamicUrl = () => {
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
