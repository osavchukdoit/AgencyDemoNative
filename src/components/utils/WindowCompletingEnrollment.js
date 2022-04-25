import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FONTS } from "../../styles/fonts";
import { shadowStyles } from "../../styles/shadowStyles";
import { THEME } from "../../styles/theme";
import CompletingEnrollmentSvg from "../../assets/icons/completingEnrollmentSvg.svg";

export const WindowCompletingEnrollment = ({ navigation, onCancel }) => {
  return (
    <View style={[styles.wrapper, shadowStyles.boxShadow]}>
      <View style={styles.iconWrapper}>
        <CompletingEnrollmentSvg />
      </View>
      <Text style={styles.title}>Your plan election is saved</Text>
      <Text style={styles.subTitle}>
        Please continue to complete election for other plans
      </Text>

      <TouchableOpacity
        onPress={() => (navigation.navigate("Home"), onCancel())}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "86%",
    backgroundColor: THEME.COLOR.WHITE,
    paddingHorizontal: 16,
    paddingTop: 38,
    borderRadius: 20,
    alignItems: "center",
  },

  iconWrapper: {
    width: 78,
    height: 78,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.BACKGROUND.VERY_LIGHT_GREY,
    marginBottom: 13,
    borderRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },

  title: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: FONTS.LETTER_SPACING.DEFAULT,
    marginBottom: 4,
  },

  subTitle: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: FONTS.LETTER_SPACING.DEFAULT,
    color: THEME.COLOR.GREY_LIGHT_TEXT,
    marginBottom: 20,
  },

  button: {
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
    width: "48%",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },

  buttonText: {
    fontFamily: FONTS.AVENIR.MEDIUM,
    fontSize: 12,
    lineHeight: 16,
    color: THEME.COLOR.WHITE,
  },
});
