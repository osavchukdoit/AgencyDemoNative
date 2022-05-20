import React, { useState } from "react";
import { TextInputMask, MaskService } from "react-native-masked-text";
import { useField } from "formik";
import { uiControlStyles } from "./uiControlStyles";
import { propMarkupStyles } from "./propMarkupStyles";
import { useHandleChangeFieldValue } from "../form/useHandleChangeFieldValue";

export const Amount = (props) => {
  const { editable, propName, personType = "employee", markup } = props;
  const fieldName = `${personType}.${propName}`;
  const [isFocused, setIsFocused] = useState(false);
  const [{ value: fieldValue }, { error: errorMessage }] = useField(fieldName);
  const markupStyles = propMarkupStyles(markup);
  const handleChangeFieldValue = useHandleChangeFieldValue(fieldName);

  const moneyMaskOptions = {
    precision: 2,
    separator: ".",
    delimiter: ",",
    unit: "$",
    suffixUnit: "",
  };
  const maskedFieldValue = MaskService.toMask(
    "money",
    fieldValue,
    moneyMaskOptions
  );

  return (
    <TextInputMask
      type={"money"}
      value={maskedFieldValue}
      includeRawValueInChangeText={true}
      onChangeText={(maskedValue, rawValue) => {
        handleChangeFieldValue(rawValue);
      }}
      style={[
        uiControlStyles.textInputBorderFocus,
        uiControlStyles.textInput,
        uiControlStyles.textInputEditable,
        !isFocused && uiControlStyles.textInputBorderBlurTransparent,
        markupStyles && markupStyles,
        errorMessage && uiControlStyles.textInputError,
      ]}
      options={moneyMaskOptions}
      editable={editable === "true"}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};
