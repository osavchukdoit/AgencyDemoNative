import React from "react";
import EnvelopeIconSvg from "../assets/icons/personInfoIcons/envelope.svg";
import { uiControlStyles } from "./uiControlStyles";
import { ControlTextInput } from "./ControlTextInput";
import { useField } from "formik";
import { propMarkupStyles } from "./propMarkupStyles";
import { useHandleChangeFieldValue } from "../form/useHandleChangeFieldValue";
import { useSetMandatory } from "../form/useSetMandatory";
import { isEmpty } from "lodash";

export const Email = (props) => {
  const {
    editable,
    personType = "employee",
    propName,
    markup,
    mandatory,
    ableToAutoSave,
    onSave,
  } = props;
  const fieldName = `${personType}.${propName}`;
  const [{ value: fieldValue }, { error, touched }] = useField(fieldName);
  const markupStyles = propMarkupStyles(markup);
  const handleChangeFieldValue = useHandleChangeFieldValue(fieldName);
  useSetMandatory({ personType, propName, mandatory });

  const onBlur = () => {
    isEmpty(error) && ableToAutoSave && touched && onSave();
  };

  return (
    <>
      <EnvelopeIconSvg style={uiControlStyles.inputIcon} />
      <ControlTextInput
        placeholder={"Enter your email address"}
        keyboardType={"email-address"}
        editable={editable}
        value={fieldValue}
        onChangeText={handleChangeFieldValue}
        errorMessage={touched && error}
        additionalStyle={[markupStyles && markupStyles]}
        onBlur={onBlur}
      />
    </>
  );
};
