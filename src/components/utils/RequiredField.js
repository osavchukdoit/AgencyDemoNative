import React from "react";
import { Text, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";

export const RequiredField = () => <Text style={styles.field}>*</Text>;

const styles = StyleSheet.create({
  field: {
    color: THEME.COLOR.BLUE_BRIGHT,
    fontFamily: FONTS.AVENIR.HEAVY,
  }
});
