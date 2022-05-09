import React from "react";
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
        editable={editable === "true"}
        value={fieldValue}
        onChangeText={handleChange(fieldName)}
        style={uiControlStyles.textInput}
      />
    </ControlWrapper>
  );
};
