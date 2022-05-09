import React, { useState } from "react";
import { TextInput, Text } from "react-native";
import ShieldIconSvg from "../assets/icons/personInfoIcons/shield.svg";
import { TextInputMask } from "react-native-masked-text";
import { ControlWrapper } from "./ControlWrapper";
import { uiControlStyles } from "./uiControlStyles";
import { useFormikContext } from "formik";
import { isEmpty } from "lodash";

export const Ssn = (props) => {
  const { editable, personType = "employee", propName } = props;
  const [isFocused, setIsFocused] = useState(false);
  const { values, handleChange, handleBlur, validateOnBlur, isValid, errors } =
    useFormikContext();
  const fieldValue = values[personType][propName];
  const fieldName = `${personType}.${propName}`;
  const errorMessage = isEmpty(errors) ? null : errors[personType][propName];

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
          onChangeText={handleChange(fieldName)}
          style={[
            uiControlStyles.textInputBorderFocus,
            uiControlStyles.textInput,
            !isFocused && uiControlStyles.textInputBorderBlurTransparent,
            errorMessage && uiControlStyles.textInputError,
          ]}
          keyboardType={"numeric"}
          placeholder={"XXX-XXX-XXXX"}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      ) : (
        <TextInput editable={false} style={uiControlStyles.textInput}>
          XXX-XXX-XXXX
        </TextInput>
      )}
      {errorMessage && (
        <Text style={uiControlStyles.textError}>{errorMessage}</Text>
      )}
    </ControlWrapper>
  );
};
