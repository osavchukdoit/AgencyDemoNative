import React from "react";
import EnvelopeIconSvg from "../assets/icons/personInfoIcons/envelope.svg";
import { uiControlStyles } from "./uiControlStyles";
import { ControlTextInput } from "./ControlTextInput";
import { useField } from "formik";
import { propMarkupStyles } from "./propMarkupStyles";
import { useHandleChangeFieldValue } from "../form/useHandleChangeFieldValue";

export const Email = (props) => {
  const { editable, personType = "employee", propName, markup } = props;
  const fieldName = `${personType}.${propName}`;
  const [{ value: fieldValue }, { error: errorMessage, touched }] =
    useField(fieldName);
  const markupStyles = propMarkupStyles(markup);
  const handleChangeFieldValue = useHandleChangeFieldValue(fieldName);

  return (
    <>
      <EnvelopeIconSvg style={uiControlStyles.inputIcon} />
      <ControlTextInput
        placeholder={"Enter your email address"}
        keyboardType={"email-address"}
        editable={editable}
        value={fieldValue}
        onChangeText={handleChangeFieldValue}
        errorMessage={touched && errorMessage}
        additionalStyle={[markupStyles && markupStyles]}
      />
    </>
  );
};
