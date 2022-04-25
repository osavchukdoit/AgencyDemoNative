import React from "react";
import { StyleSheet } from "react-native";
import { FONTS } from "../styles/fonts";

export const styles = StyleSheet.create({
  drawerHeader: {
    padding: 20,
    paddingTop: 10,
  },
  drawerHeaderText: {
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: FONTS.LETTER_SPACING.DEFAULT,
  },
  drawerItemWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  labelWrapper: {
    flexDirection: "row",
  },
  labelIconLeft: {
    marginRight: 10,
  },
  labelIconRight: {
    position: "relative",
    right: -30,
  },
  labelText: {
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: FONTS.LETTER_SPACING.DEFAULT,
  },
  headerLogo: {
    width: 64,
    height: 47,
  },
  headerButtonsWrapper: {
    flexDirection: "row",
    marginRight: 13,
  },
  headerButton: {
    padding: 7,
  },
  linearGradientWrapper: {
    height: 1,
    position: "relative",
  },
  linearGradient: {
    width: 265,
    position: "absolute",
    left: -20,
    bottom: -20,
    height: "100%",
  },
});
