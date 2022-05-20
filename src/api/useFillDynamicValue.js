import React from "react";
import { isEmpty } from "lodash";
import { useSelector } from "react-redux";
import moment from "moment";
import { millisecondsToYears } from "./utils";

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

/**
 * Replace dynamic string inside `{}` with corresponding values context
 * object's properties.
 *
 * @param {object} context context object
 * @param {boolean} isConditional if `true` wraps the replaced value with quotes
 * @returns {(function(*): (*))|*}
 */
export const useFillDynamicContextField = (
  context = {},
  isConditional = false
) => {
  return (dynamicString) => {
    const dynamicFillerMatcher = /\{(.*?)\}/g;
    const fillerFields = dynamicString?.match(dynamicFillerMatcher);
    if (isEmpty(fillerFields)) return dynamicString;

    const replacedFields = fillerFields.map((field) =>
      field.replace(/\{/g, "").replace(/\}/g, "")
    );
    const domainData = replacedFields.map((field) => {
      let result = context;
      const splitArray = field.split(".");
      splitArray.forEach((item) => {
        if (item === "sysdate") {
          const dateNowMs = moment().valueOf();
          result = millisecondsToYears(dateNowMs);
        } else if (item === "depDob") {
          const dobMs = moment(result[item], "L").valueOf();
          result = millisecondsToYears(dobMs);
        } else {
          result = result[item];
        }
      });
      return result;
    });
    let result = dynamicString;
    fillerFields.map((matchedField, index) => {
      const replacer = isConditional
        ? `\"${domainData[index]}\"`
        : domainData[index];
      result = result.replace(matchedField, replacer);
    });
    return result;
  };
};
