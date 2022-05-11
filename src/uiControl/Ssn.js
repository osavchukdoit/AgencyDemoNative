import React, { useState } from "react";
import { TextInput, Text } from "react-native";
import ShieldIconSvg from "../assets/icons/personInfoIcons/shield.svg";
import { TextInputMask } from "react-native-masked-text";
import { ControlWrapper } from "./ControlWrapper";
import { uiControlStyles } from "./uiControlStyles";
import { useField } from "formik";

export const Ssn = (props) => {
  const { editable, personType = "employee", propName } = props;
  const [isFocused, setIsFocused] = useState(false);
  const fieldName = `${personType}.${propName}`;
  const [{ value: fieldValue }, { error: errorMessage }, { setValue }] =
    useField(fieldName);

  return (
    <ControlWrapper {...props}>
      <ShieldIconSvg style={uiControlStyles.inputIcon} />
      {editable === "true" ? (
        <TextInputMask
          type={"custom"}
          options={{
            mask: "999-99-9999",
          }}
          value={fieldValue}
          onChangeText={setValue}
          style={[
            uiControlStyles.textInputBorderFocus,
            uiControlStyles.textInput,
            uiControlStyles.textInputEditable,
            !isFocused && uiControlStyles.textInputBorderBlurTransparent,
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
    </ControlWrapper>
  );
};
