import React, { useState } from "react";
import { uiControlStyles } from "./uiControlStyles";
import { TextInput, Text } from "react-native";

export const ControlTextInput = (props) => {
  const { style, children, errorMessage = null, onBlur } = props;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <TextInput
        autoCapitalize={"none"}
        autoCorrect={false}
        style={[
          uiControlStyles.textInputBorderFocus,
          !isFocused && uiControlStyles.textInputBorderBlur,
          style && style,
          errorMessage && uiControlStyles.textInputError,
        ]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          onBlur();
        }}
        {...props}
      >
        {children}
      </TextInput>
      {errorMessage && (
        <Text style={uiControlStyles.textError}>{errorMessage}</Text>
      )}
    </>
  );
};
