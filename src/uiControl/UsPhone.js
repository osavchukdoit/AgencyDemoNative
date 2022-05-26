import React, { useState } from "react";
import MobileIconSvg from "../assets/icons/personInfoIcons/mobile.svg";
import PhoneIconSvg from "../assets/icons/personInfoIcons/phone.svg";
import { TextInputMask } from "react-native-masked-text";
import { uiControlStyles } from "./uiControlStyles";
import { useField } from "formik";
import { Text } from "react-native";
import { propMarkupStyles } from "./propMarkupStyles";
import { useHandleChangeFieldValue } from "../form/useHandleChangeFieldValue";
import { useSetMandatory } from "../form/useSetMandatory";

export const UsPhone = (props) => {
  const {
    propName,
    placeholder = "Enter your phone number",
    editable,
    personType = "employee",
    markup,
    mandatory,
  } = props;
  const fieldName = `${personType}.${propName}`;
  const [{ value: fieldValue }, { error: errorMessage, touched }] =
    useField(fieldName);
  const [isFocused, setIsFocused] = useState(false);
  const markupStyles = propMarkupStyles(markup);
  const handleChangeFieldValue = useHandleChangeFieldValue(fieldName);
  useSetMandatory({ personType, propName, mandatory });

  return (
    <>
      {propName === "mobilePhone" ? (
        <MobileIconSvg style={uiControlStyles.inputIcon} />
      ) : (
        <PhoneIconSvg style={uiControlStyles.inputIcon} />
      )}
      <TextInputMask
        type={"custom"}
        options={{
          mask: "(999) 999-9999",
        }}
        value={fieldValue}
        onChangeText={handleChangeFieldValue}
        style={[
          uiControlStyles.textInputBorderFocus,
          editable === "true" && uiControlStyles.textInputEditable,
          !isFocused && uiControlStyles.textInputBorderBlur,
          markupStyles && markupStyles,
          errorMessage && touched && uiControlStyles.textInputError,
        ]}
        placeholder={placeholder}
        keyboardType={"phone-pad"}
        autoCapitalize={"none"}
        autoCorrect={false}
        editable={editable === "true"}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {errorMessage && touched && (
        <Text style={uiControlStyles.textError}>{errorMessage}</Text>
      )}
    </>
  );
};
