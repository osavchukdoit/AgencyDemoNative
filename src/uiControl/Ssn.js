import React, { useState } from "react";
import { TextInput, Text } from "react-native";
import ShieldIconSvg from "../assets/icons/personInfoIcons/shield.svg";
import { TextInputMask } from "react-native-masked-text";
import { uiControlStyles } from "./uiControlStyles";
import { useField } from "formik";
import { propMarkupStyles } from "./propMarkupStyles";
import { useHandleChangeFieldValue } from "../form/useHandleChangeFieldValue";

export const Ssn = (props) => {
  const { editable, personType = "employee", propName, markup } = props;
  const [isFocused, setIsFocused] = useState(false);
  const fieldName = `${personType}.${propName}`;
  const [{ value: fieldValue }, { error: errorMessage }] = useField(fieldName);
  const markupStyles = propMarkupStyles(markup);
  const handleChangeFieldValue = useHandleChangeFieldValue(fieldName);

  return (
    <>
      <ShieldIconSvg style={uiControlStyles.inputIcon} />
      {editable === "true" ? (
        <TextInputMask
          type={"custom"}
          options={{
            mask: "999-99-9999",
          }}
          value={fieldValue}
          onChangeText={handleChangeFieldValue}
          style={[
            uiControlStyles.textInputBorderFocus,
            uiControlStyles.textInput,
            uiControlStyles.textInputEditable,
            !isFocused && uiControlStyles.textInputBorderBlurTransparent,
            markupStyles && markupStyles,
            errorMessage && uiControlStyles.textInputError,
          ]}
          keyboardType={"numeric"}
          placeholder={"XXX-XX-XXXX"}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      ) : (
        <TextInput editable={false} style={uiControlStyles.textInput}>
          {fieldValue}
        </TextInput>
      )}
      {errorMessage && (
        <Text style={uiControlStyles.textError}>{errorMessage}</Text>
      )}
    </>
  );
};
