import React from "react";
import { Text } from "react-native";
import { FONTS } from "../../styles/fonts";

/** Changes color of the text. */
export const AppText = ({
  children,
  color,
  fontFamily = FONTS.AVENIR.ROMAN,
  style,
  ...props
}) => {
  const defaultText = {
    fontWeight: "normal",
    fontStyle: "normal",
  };

  return (
    <Text
      style={{ color: color, fontFamily, ...defaultText, ...style }}
      {...props}
    >
      {children}
    </Text>
  );
};
