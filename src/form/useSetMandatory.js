import React, { useEffect } from "react";
import { useField } from "formik";

/**
 * Creates is${propName}Mandatory field, passes the `mandatory` value to the field.
 * Yup schema triggers `.required()` validation if the field is mandatory.
 *
 * @param {string} personType type of person for the current block
 * @param {string} propName field property name
 * @param {string} mandatory determines if the field is required
 */
export const useSetMandatory = ({ personType, propName, mandatory }) => {
  const mandatoryPropName = `${personType}.is${propName}Mandatory`;
  const [, , { setValue: setMandatory }] = useField(mandatoryPropName);
  useEffect(() => setMandatory(mandatory), [propName, mandatory]);
};
