import React from "react";
import { StyleSheet } from "react-native";
import PersonIconSvg from "../assets/icons/familyInfoIcons/person.svg";
import { uiControlStyles } from "./uiControlStyles";
import { useField } from "formik";
import { ControlTextInput } from "./ControlTextInput";
import { propMarkupStyles } from "./propMarkupStyles";
import { useHandleChangeFieldValue } from "../form/useHandleChangeFieldValue";
import { useSetMandatory } from "../form/useSetMandatory";
import { isEmpty } from "lodash";

export const StaticText = (props) => {
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
  const [{ value: fieldValue }, { error, touched }] = useField(fieldName);
  const markupStyles = propMarkupStyles(markup);
  const handleChangeFieldValue = useHandleChangeFieldValue(fieldName);
  useSetMandatory({ personType, propName, mandatory });

  const onBlur = () => {
    isEmpty(error) && ableToAutoSave && touched && onSave();
  };

  return (
    <>
      {editable === "true" && (
        <PersonIconSvg style={uiControlStyles.inputIcon} />
      )}
      <ControlTextInput
        editable={editable}
        value={fieldValue}
        onChangeText={handleChangeFieldValue}
        additionalStyle={[
          editable === "true"
            ? [uiControlStyles.textInput, uiControlStyles.textInputEditable]
            : staticTextStyles.textInput,
          markupStyles && markupStyles,
        ]}
        errorMessage={touched ? error : null}
        onBlur={onBlur}
      />
    </>
  );
};

const staticTextStyles = StyleSheet.create({
  textInput: {
    borderColor: "transparent",
  },
});
