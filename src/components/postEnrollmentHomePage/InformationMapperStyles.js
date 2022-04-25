import { StyleSheet } from "react-native";
import { FONTS } from "../../styles/fonts";
import { THEME } from "../../styles/theme";

export default StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    paddingVertical: 5,
    alignItems: "center",
    backgroundColor: THEME.BACKGROUND.VERY_LIGHT_BLUE_V4,
    paddingHorizontal: 16,
  },

  additionalBgColor: {
    backgroundColor: THEME.BACKGROUND.VERY_LIGHT_BLUE_V2,
  },

  additionalTopRadius: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  additionalBottomRadius: {
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    marginBottom: 13,
  },

  additionalTextWrappertWidth: {
    width: "46%",
  },

  additionalInputWidth: {
    width: "54%",
  },

  additionalTextWidth: {
    width: "90%",
  },

  additionalWidthFull: {
    width: "100%",
  },

  text: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: FONTS.LETTER_SPACING.DEFAULT,
    color: THEME.COLOR.GREY_LIGHT_RGBA,
    flexWrap: "wrap",
  },

  inputContainer: {
    borderWidth: 1,
    paddingLeft: 7,
    paddingRight: 5,
    borderRadius: 8,
    borderColor: "transparent",
  },

  borderActive: {
    borderColor: THEME.COLOR.BLUE_BRIGHT_RGBA,
  },

  textAndButtonWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  textDark: {
    color: THEME.COLOR.GREY_DARK_TEXT,
  },

  buttonWithIcon: {
    width: 22,
    height: 22,
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
