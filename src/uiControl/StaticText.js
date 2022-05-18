import React from "react";
import { StyleSheet } from "react-native";
import PersonIconSvg from "../assets/icons/familyInfoIcons/person.svg";
import { uiControlStyles } from "./uiControlStyles";
import { useField } from "formik";
import { ControlTextInput } from "./ControlTextInput";
import { propMarkupStyles } from "./propMarkupStyles";

export const StaticText = (props) => {
  const { editable, propName, personType = "employee", markup } = props;
  const fieldName = `${personType}.${propName}`;
  const [{ value: fieldValue }, , { setValue }] = useField(fieldName);
  const markupStyles = propMarkupStyles(markup);

  return (
    <>
      {editable === "true" && (
        <PersonIconSvg style={uiControlStyles.inputIcon} />
      )}
      <ControlTextInput
        editable={editable}
        value={fieldValue}
        onChangeText={setValue}
        additionalStyle={[
          editable === "true"
            ? [uiControlStyles.textInput, uiControlStyles.textInputEditable]
            : staticTextStyles.textInput,
          markupStyles && markupStyles
        ]}
      />
    </>
  );
};

const staticTextStyles = StyleSheet.create({
  textInput: {
    borderColor: "transparent",
  },
});
