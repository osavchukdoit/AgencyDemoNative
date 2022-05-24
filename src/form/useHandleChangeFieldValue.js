import React from "react";
import { useField } from "formik";

/**
 * Changes the field's value to `inputValue`, changes the field's touched
 * status to `true`.
 */
export const useHandleChangeFieldValue = (fieldName) => {
  const [, , { setValue, setTouched }] = useField(fieldName);

  return (inputValue) => {
    setTouched(true);
    setValue(inputValue);
  };
};
