import React, { useState } from "react";
import { ControlWrapper } from "./ControlWrapper";
import { TextInputMask, MaskService } from "react-native-masked-text";
import { useField } from "formik";
import { uiControlStyles } from "./uiControlStyles";

export const Amount = (props) => {
  const { editable, propName, personType = "employee" } = props;
  const fieldName = `${personType}.${propName}`;
  const [isFocused, setIsFocused] = useState(false);
  const [{ value: fieldValue }, { error: errorMessage }, { setValue }] =
    useField(fieldName);

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
    <ControlWrapper {...props}>
      <TextInputMask
        type={"money"}
        value={maskedFieldValue}
        includeRawValueInChangeText={true}
        onChangeText={(maskedValue, rawValue) => {
          setValue(rawValue);
        }}
        style={[
          uiControlStyles.textInputBorderFocus,
          uiControlStyles.textInput,
          uiControlStyles.textInputEditable,
          !isFocused && uiControlStyles.textInputBorderBlurTransparent,
          errorMessage && uiControlStyles.textInputError,
        ]}
        options={moneyMaskOptions}
        editable={editable === "true"}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </ControlWrapper>
  );
};
