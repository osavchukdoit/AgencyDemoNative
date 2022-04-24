import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FONTS } from "../../styles/fonts";
import { shadowStyles } from "../../styles/shadowStyles";
import { THEME } from "../../styles/theme";
import PlanSvedSvg from "../../assets/icons/planSavedSvg.svg";

export const WindowPlanElectionSaved = ({ onCancel }) => {
  return (
    <View style={[styles.wrapper, shadowStyles.boxShadow]}>
      <View style={styles.iconWrapper}>
        <PlanSvedSvg />
      </View>
      <Text style={styles.title}>Your plan election is saved</Text>
      <Text style={styles.subTitle}>
        Please continue to complete election for other plans
      </Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={onCancel} style={styles.button}>
          <Text style={styles.buttonText}>Go to Benefits Overview</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.additionalButtonColor]}>
          <Text style={[styles.buttonText, styles.checkedText]}>
            See Next Plan
          </Text>
        </TouchableOpacity>
      </View>
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
    letterSpacing: -0.28,
    marginBottom: 4,
  },

  subTitle: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.28,
    color: THEME.COLOR.GREY_LIGHT_TEXT,
    marginBottom: 20,
  },

  buttonsContainer: {
    flexDirection: "row",
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 8,
    shadowColor: THEME.COLOR.GREY_LIGHT_TEXT,
    shadowOpacity: 0.06,
    borderStyle: "solid",
    borderRadius: 10,
    justifyContent: "space-between",
    marginBottom: 30,
    width: "100%",
  },

  button: {
    borderWidth: 1,
    borderColor: THEME.COLOR.BLUE_BRIGHT,
    width: "48%",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  additionalButtonColor: {
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
  },

  checkedText: {
    color: THEME.COLOR.WHITE,
  },

  buttonText: {
    fontFamily: FONTS.AVENIR.MEDIUM,
    fontSize: 12,
    lineHeight: 16,
    color: THEME.COLOR.BLUE_BRIGHT,
  },
});
