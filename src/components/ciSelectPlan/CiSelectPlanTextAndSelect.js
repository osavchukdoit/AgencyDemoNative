import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";
import { BasicSectorWrapper } from "../utils/BasicSectorWrapper";

export const CiSelectPlanTextAndSelect = () => {
  return (
    <BasicSectorWrapper>
      <Text style={styles.sectorText}>
        By submitting my election for coverage, I am attesting that I have read
        and agree to the posted Conditions of Enrollment document:
      </Text>
      <View style={styles.linkTextWrapper}>
        <Text style={styles.sectorText}>Review the </Text>
        <Text style={[styles.sectorText, styles.linkText]}>
          terms and conditions.
        </Text>
      </View>
    </BasicSectorWrapper>
  );
};

const styles = StyleSheet.create({
  sectorText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.28,
    color: THEME.COLOR.GREY_LIGHT_TEXT,
    marginBottom: 9,
  },

  linkTextWrapper: {
    flexDirection: "row",
    marginBottom: 5,
  },

  linkText: {
    color: THEME.COLOR.BLUE_BRIGHT,
    textDecorationLine: "underline",
  },
});
