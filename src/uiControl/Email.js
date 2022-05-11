import React from "react";
import EnvelopeIconSvg from "../assets/icons/personInfoIcons/envelope.svg";
import { ControlWrapper } from "./ControlWrapper";
import { uiControlStyles } from "./uiControlStyles";
import { ControlTextInput } from "./ControlTextInput";
import { useField } from "formik";

export const Email = (props) => {
  const { editable, personType = "employee", propName } = props;
  const fieldName = `${personType}.${propName}`;
  const [
    { value: fieldValue },
    { error: errorMessage, touched },
    { setValue, setTouched },
  ] = useField(fieldName);

  return (
    <ControlWrapper {...props}>
      <EnvelopeIconSvg style={uiControlStyles.inputIcon} />
      <ControlTextInput
        placeholder={"Enter your email address"}
        keyboardType={"email-address"}
        editable={editable}
        value={fieldValue}
        onChangeText={(val) => {
          setValue(val);
          setTouched(true);
        }}
        errorMessage={touched && errorMessage}
      />
    </ControlWrapper>
  );
};
