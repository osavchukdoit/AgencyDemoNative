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
  return (
    <Text style={{ color: color, fontFamily, ...style }} {...props}>
      {children}
    </Text>
  );
};
