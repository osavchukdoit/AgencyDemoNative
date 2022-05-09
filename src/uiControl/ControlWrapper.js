import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FONTS } from "../styles/fonts";
import { THEME } from "../styles/theme";
import { RequiredField } from "../components/utils/RequiredField";

export const ControlWrapper = (props) => {
  const { propLabel, mandatory, children, propName } = props;

  return (
    <View style={[styles.wrapper]}>
      <Text style={styles.title}>
        {propLabel}
        {mandatory === "true" && <RequiredField />}
      </Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    marginBottom: 16,
    width: "100%",
  },
  title: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 16,
    lineHeight: 22,
    color: THEME.COLOR.GREY_DARK_TEXT,
    marginBottom: 9,
  },
});
