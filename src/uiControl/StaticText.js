import React from "react";
import { StyleSheet } from "react-native";
import PersonIconSvg from "../assets/icons/familyInfoIcons/person.svg";
import { ControlWrapper } from "./ControlWrapper";
import { uiControlStyles } from "./uiControlStyles";
import { useFormikContext } from "formik";
import { ControlTextInput } from "./ControlTextInput";

export const StaticText = (props) => {
  const { editable, propName, personType = "employee" } = props;
  const { values, handleChange, handleBlur } = useFormikContext();
  const fieldValue = values[personType][propName];
  const fieldName = `${personType}.${propName}`;

  return (
    <ControlWrapper {...props}>
      <PersonIconSvg style={uiControlStyles.inputIcon} />
      <ControlTextInput
        editable={editable}
        value={fieldValue}
        onChangeText={handleChange(fieldName)}
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
