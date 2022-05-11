import React from "react";
import { StyleSheet } from "react-native";
import PersonIconSvg from "../assets/icons/familyInfoIcons/person.svg";
import { ControlWrapper } from "./ControlWrapper";
import { uiControlStyles } from "./uiControlStyles";
import { useField } from "formik";
import { ControlTextInput } from "./ControlTextInput";

export const StaticText = (props) => {
  const { editable, propName, personType = "employee" } = props;
  const fieldName = `${personType}.${propName}`;
  const [{ value: fieldValue }, , { setValue }] = useField(fieldName);

  return (
    <ControlWrapper {...props}>
      <PersonIconSvg style={uiControlStyles.inputIcon} />
      <ControlTextInput
        editable={editable}
        value={fieldValue}
        onChangeText={setValue}
        additionalStyle={[
          editable === "true"
            ? [uiControlStyles.textInput, uiControlStyles.textInputEditable]
            : staticTextStyles.textInput,
        ]}
      />
    </ControlWrapper>
  );
};

const staticTextStyles = StyleSheet.create({
  textInput: {
    borderColor: "transparent",
  },
});
