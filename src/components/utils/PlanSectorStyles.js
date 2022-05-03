import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";

export default StyleSheet.create({
  planSectorWrapper: {
    padding: 11,
    backgroundColor: THEME.COLOR.WHITE,
    borderRadius: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: THEME.COLOR.WHITE,
  },

  focusPlanSectorBorder: {
    borderColor: THEME.BACKGROUND.MENU,
  },

  iconAndTitleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  iconWrapper: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: THEME.BACKGROUND.VERY_LIGHT_GREY,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 7,
  },

  sectorTitle: {
    color: THEME.COLOR.GREY_DARK_TEXT,
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: FONTS.LETTER_SPACING.DEFAULT,
  },

  selectedButtonAndTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  selectedRaioButton: {
    height: 13,
    width: 13,
    borderWidth: 1,
    borderColor: THEME.COLOR.DARK_BLUE_TEXT,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },

  radioButtonPoint: {
    width: 7,
    height: 7,
    borderRadius: 8,
    backgroundColor: THEME.COLOR.DARK_BLUE_TEXT,
  },

  displayNone: {
    display: "none",
  },

  selectedRadioButtonText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: FONTS.LETTER_SPACING.DEFAULT,
    color: THEME.COLOR.BLACK,
  },
});
