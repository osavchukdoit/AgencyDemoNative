import React, { useState } from "react";
import { TextInputMask, MaskService } from "react-native-masked-text";
import { useField } from "formik";
import { uiControlStyles } from "./uiControlStyles";
import { propMarkupStyles } from "./propMarkupStyles";
import { useHandleChangeFieldValue } from "../form/useHandleChangeFieldValue";
import { useSetMandatory } from "../form/useSetMandatory";
import { Text } from "react-native";
import { isEmpty } from "lodash";

export const Amount = (props) => {
  const {
    editable,
    propName,
    personType = "employee",
    markup,
    mandatory,
    ableToAutoSave,
    onSave,
  } = props;
  const fieldName = `${personType}.${propName}`;
  const [isFocused, setIsFocused] = useState(false);
  const [{ value: fieldValue }, { error, touched }] = useField(fieldName);
  const markupStyles = propMarkupStyles(markup);
  const handleChangeFieldValue = useHandleChangeFieldValue(fieldName);
  useSetMandatory({ personType, propName, mandatory });

  const onBlur = () => {
    setIsFocused(false);
    isEmpty(error) && ableToAutoSave && touched && onSave();
  };

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
    <>
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
          error && uiControlStyles.textInputError,
        ]}
        options={moneyMaskOptions}
        editable={editable === "true"}
        onFocus={() => setIsFocused(true)}
        onBlur={onBlur}
      />
      {error && touched && (
        <Text style={uiControlStyles.textError}>{error}</Text>
      )}
    </>
  );
};
