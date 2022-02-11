import React from "react";
import { Text } from "react-native";

/** Changes color of the text. */
export const AppText = ({ children, color, ...props }) => {
  return (
    <Text style={{ color: color }} {...props}>
      {children}
    </Text>
  );
};
