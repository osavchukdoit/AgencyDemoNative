import { StyleSheet } from "react-native";
import { FONTS } from "../styles/fonts";
import { THEME } from "../styles/theme";

export const uiControlStyles = StyleSheet.create({
  subText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 10,
    lineHeight: 14,
    color: THEME.COLOR.GREY_LIGHT_TEXT_V2,
    marginBottom: 11,
  },
  inputIcon: {
    position: "absolute",
    top: 46,
    left: 20,
    zIndex: 1,
  },
  textInput: {
    height: 49,
    backgroundColor: "transparent",
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 22,
    color: THEME.COLOR.DARK_BLUE_TEXT,
    borderRadius: 10,
    paddingLeft: 51,
  },
  textInputEditable: {
    backgroundColor: THEME.BACKGROUND.LIGHT_BLUE,
  },
  textInputBorderFocus: {
    height: 49,
    fontFamily: FONTS.AVENIR.MEDIUM,
    fontSize: 14,
    lineHeight: 18,
    color: THEME.COLOR.DARK_BLUE_TEXT,
    borderRadius: 10,
    paddingLeft: 51,
    borderWidth: 1,
    borderColor: THEME.COLOR.BLUE_BRIGHT,
    borderStyle: "solid",
    shadowColor: THEME.COLOR.GREY_LIGHT_TEXT,
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 1 },
  },
  textInputBorderBlur: {
    borderColor: THEME.COLOR.LIGHT_BORDER,
  },
  textInputBorderBlurTransparent: {
    borderColor: "transparent",
  },
  textInputError: {
    borderColor: THEME.COLOR.WARNING_TEXT,
  },
  textError: {
    color: THEME.COLOR.WARNING_TEXT,
  },
});
