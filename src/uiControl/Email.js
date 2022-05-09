import React, { useMemo } from "react";
import EnvelopeIconSvg from "../assets/icons/personInfoIcons/envelope.svg";
import { ControlWrapper } from "./ControlWrapper";
import { uiControlStyles } from "./uiControlStyles";
import { ControlTextInput } from "./ControlTextInput";
import { useFormikContext } from "formik";
import { isEmpty } from "lodash";

export const Email = (props) => {
  const { editable, personType = "employee", propName } = props;
  const {
    values,
    handleChange,
    handleBlur,
    validateOnBlur,
    isValid,
    errors,
    touched,
  } = useFormikContext();
  const fieldValue = values[personType][propName];
  const fieldName = `${personType}.${propName}`;
  const isTouched = useMemo(
    () => touched?.employee?.email,
    [touched, personType, propName]
  );
  const errorMessage =
    isEmpty(errors) || !isTouched ? null : errors[personType][propName];

  return (
    <ControlWrapper {...props}>
      <EnvelopeIconSvg style={uiControlStyles.inputIcon} />
      <ControlTextInput
        placeholder={"Enter your email address"}
        keyboardType={"email-address"}
        editable={editable}
        value={fieldValue}
        onChangeText={handleChange(fieldName)}
        errorMessage={errorMessage}
        onBlur={handleBlur(fieldName)}
      />
    </ControlWrapper>
  );
};
