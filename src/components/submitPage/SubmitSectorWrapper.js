import React from "react";
import { View, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";
import { shadowStyles } from "../../styles/shadowStyles";

export const SubmitSectorWrapper = ({ children }) => {
  return (
    <View style={[styles.wrapper, shadowStyles.boxShadow]}>{children}</View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 16,
    paddingHorizontal: 18,
    backgroundColor: THEME.COLOR.WHITE,
    borderRadius: 20,
    marginBottom: 15,
  },
});
