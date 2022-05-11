import React, { useEffect, useState } from "react";
import MobileIconSvg from "../assets/icons/personInfoIcons/mobile.svg";
import PhoneIconSvg from "../assets/icons/personInfoIcons/phone.svg";
import { TextInputMask } from "react-native-masked-text";
import { ControlWrapper } from "./ControlWrapper";
import { uiControlStyles } from "./uiControlStyles";
import { useField } from "formik";
import { useDomainValues } from "../form/useDomainValues";

export const UsPhone = (props) => {
  const {
    propName,
    placeholder = "Enter your phone number",
    editable,
    personType = "employee",
  } = props;
  const fieldName = `${personType}.${propName}`;
  const [
    { value: fieldValue },
    { error: errorMessage, touched },
    { setValue, setTouched },
  ] = useField(fieldName);
  const [isFocused, setIsFocused] = useState(false);
  const { domainValue } = useDomainValues(propName);

  useEffect(() => {
    if (domainValue) setValue(domainValue);
  }, [domainValue]);

  return (
    <ControlWrapper {...props}>
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
        onChangeText={setValue}
        style={[
          uiControlStyles.textInputBorderFocus,
          editable === "true" && uiControlStyles.textInputEditable,
          !isFocused && uiControlStyles.textInputBorderBlur,
        ]}
        placeholder={placeholder}
        keyboardType={"phone-pad"}
        autoCapitalize={"none"}
        autoCorrect={false}
        editable={editable === "true"}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </ControlWrapper>
  );
};
