import React, { useState } from "react";
import MobileIconSvg from "../assets/icons/personInfoIcons/mobile.svg";
import PhoneIconSvg from "../assets/icons/personInfoIcons/phone.svg";
import { TextInputMask } from "react-native-masked-text";
import { ControlWrapper } from "./ControlWrapper";
import { uiControlStyles } from "./uiControlStyles";

export const UsPhone = (props) => {
  const { propName, placeholder = "Enter your phone number", editable } = props;
  const [phoneValue, setPhoneValue] = useState();
  const [isFocused, setIsFocused] = useState(false);

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
          mask: "(999) 9999-9999",
        }}
        value={phoneValue}
        onChangeText={setPhoneValue}
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
