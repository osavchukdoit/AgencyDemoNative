import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";

export const OpenEnrollmentTerm = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.titleContainer}>
        <Text style={styles.textBold}>Open Enrollment</Text>
      </View>
      <View style={styles.rowContainet}>
        <Text style={[styles.textBold, styles.textNormal]}>Effective on: </Text>
        <Text style={styles.textBold}>02/01/2022</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: THEME.BACKGROUND.BUTTON_SHOW_HIDE,
    borderRadius: 20,
    paddingVertical: 12,
    paddingLeft: 14,
    paddingRight: 22,
    flexDirection: "row",
    marginTop: 12,
  },

  textBold: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 12,
    lineHeight: 16,
    color: THEME.COLOR.DARK_BLUE_TEXT_V1,
  },

  textNormal: {
    fontFamily: FONTS.AVENIR.ROMAN,
  },

  rowContainet: {
    flexDirection: "row",
  },

  titleContainer: {
    width: "50%",
  },
});
