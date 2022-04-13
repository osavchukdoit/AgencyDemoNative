import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FONTS } from "../../styles/fonts";
import { THEME } from "../../styles/theme";
import { SubmitSectorWrapper } from "../submitPage/SubmitSectorWrapper";

export const SectorWithTextAndButton = () => {
  return (
    <SubmitSectorWrapper>
      <Text style={styles.text}>
        If you would like to make changes to your enrollment that you have
        completed, click below.
      </Text>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Begin Re-Enrollment</Text>
        </TouchableOpacity>
      </View>
    </SubmitSectorWrapper>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 17,
    color: THEME.COLOR.DARK_BLUE_TEXT,
    marginBottom: 13,
  },

  buttonWrapper: {
    alignItems: "center",
  },

  button: {
    paddingVertical: 14,
    paddingHorizontal: 43,
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
    borderRadius: 10,
    marginBottom: 15,
  },

  buttonText: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 22,
    color: THEME.COLOR.WHITE,
  },
});
