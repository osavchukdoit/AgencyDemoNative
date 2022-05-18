import React from "react";
import EnvelopeIconSvg from "../assets/icons/personInfoIcons/envelope.svg";
import { uiControlStyles } from "./uiControlStyles";
import { ControlTextInput } from "./ControlTextInput";
import { useField } from "formik";
import { propMarkupStyles } from "./propMarkupStyles";

export const Email = (props) => {
  const { editable, personType = "employee", propName, markup } = props;
  const fieldName = `${personType}.${propName}`;
  const [
    { value: fieldValue },
    { error: errorMessage, touched },
    { setValue, setTouched },
  ] = useField(fieldName);
  const markupStyles = propMarkupStyles(markup);

  return (
    <>
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
        additionalStyle={[markupStyles && markupStyles]}
      />
    </>
  );
};
