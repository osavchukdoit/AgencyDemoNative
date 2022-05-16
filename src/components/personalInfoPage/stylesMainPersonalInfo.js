import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";

export default StyleSheet.create({
  titleInfo: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 16,
    lineHeight: 22,
    color: THEME.COLOR.GREY_DARK_TEXT,
    marginBottom: 9,
  },
  subText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 10,
    lineHeight: 14,
    color: THEME.COLOR.GREY_LIGHT_TEXT_V2,
    marginBottom: 11,
  },
  inputIcon: {
    position: "absolute",
    bottom: 16,
    left: 20,
    zIndex: 9,
  },
  textInput: {
    height: 49,
    backgroundColor: THEME.BACKGROUND.LIGHT_BLUE,
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 22,
    color: THEME.COLOR.DARK_BLUE_TEXT,
    borderRadius: 10,
    paddingLeft: 51,
  },
  textInputMediumSize: {
    fontSize: 16,
    lineHeight: 22,
    fontFamily: FONTS.AVENIR.HEAVY,
  },
  textInputBorderFocus: {
    height: 49,
    fontFamily: FONTS.AVENIR.MEDIUM,
    fontSize: 14,
    lineHeight: 20,
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
  titleAndInputWrapper: {
    position: "relative",
    marginBottom: 16,
  },
  additionalButtonColor: {
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
  },
  questionText: {
    fontFamily: FONTS.AVENIR.MEDIUM,
    fontSize: 14,
    lineHeight: 20,
    color: THEME.COLOR.GREY_DARK_TEXT,
    marginBottom: 15,
  },
  radioButtonsWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  saveButton: {
    minWidth: 160,
    paddingHorizontal: 10,
    height: 49,
    borderRadius: 10,
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 22,
    shadowColor: THEME.COLOR.GREY_LIGHT_TEXT,
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 1 },
  },
  saveButtonText: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 22,
    color: THEME.COLOR.WHITE,
  },
  saveButtonWrapper: {
    alignItems: "center",
  },
});
