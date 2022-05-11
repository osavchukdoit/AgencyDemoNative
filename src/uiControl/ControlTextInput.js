import React, { useState } from "react";
import { uiControlStyles } from "./uiControlStyles";
import { TextInput, Text } from "react-native";

export const ControlTextInput = (props) => {
  const {
    additionalStyle,
    children,
    errorMessage = null,
    onBlur = () => {},
    editable,
    ...restProps
  } = props;
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <TextInput
        autoCapitalize={"none"}
        autoCorrect={false}
        style={[
          uiControlStyles.textInputBorderFocus,
          !isFocused && uiControlStyles.textInputBorderBlur,
          editable === "true" && uiControlStyles.textInputEditable,
          additionalStyle && additionalStyle,
          errorMessage && uiControlStyles.textInputError,
        ]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          onBlur();
        }}
        editable={editable === "true"}
        {...restProps}
      >
        {children}
      </TextInput>
      {errorMessage && (
        <Text style={uiControlStyles.textError}>{errorMessage}</Text>
      )}
    </>
  );
};
