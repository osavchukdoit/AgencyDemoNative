import { StyleSheet } from "react-native";
import { FONTS } from "../../styles/fonts";
import { THEME } from "../../styles/theme";

export default StyleSheet.create({
  postPlanlanSectorWrapper: {
    paddingTop: 20,
    paddingHorizontal: 18,
    backgroundColor: THEME.COLOR.WHITE,
    borderRadius: 20,
    marginBottom: 16,
  },

  additionalPaddingBottom: {
    paddingBottom: 14,
  },

  iconAndTitleWrapper: {
    flexDirection: "row",
    marginBottom: 9,
  },

  iconWrapper: {
    width: 47,
    height: 47,
    borderRadius: 10,
    backgroundColor: THEME.BACKGROUND.VERY_LIGHT_GREY,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 9,
  },

  rotate: {
    transform: [{ rotate: "180deg" }],
  },

  titleAndButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  sectorTitle: {
    color: THEME.COLOR.GREY_DARK_TEXT,
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: FONTS.LETTER_SPACING.DEFAULT,
    width: "75%",
    marginBottom: 2,
  },

  buttonShowHide: {
    width: 24,
    height: 24,
    borderRadius: 4,
    backgroundColor: THEME.BACKGROUND.BUTTON_SHOW_HIDE,
    justifyContent: "center",
    alignItems: "center",
  },

  dateText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 14,
    lineHeight: 19,
    color: THEME.COLOR.DARK_BLUE_TEXT,
    marginBottom: 2,
  },

  costText: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: FONTS.LETTER_SPACING.DEFAULT,
    color: THEME.COLOR.BLUE_BRIGHT,
  },

  employeeAndFamilyWrapper: {
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 9,
    backgroundColor: THEME.BACKGROUND.VERY_LIGHT_BLUE_V4,
    borderRadius: 8,
  },

  additionalMarginBottom: {
    marginBottom: 13,
  },

  employeeAndFamilyTitle: {
    fontFamily: FONTS.AVENIR.MEDIUM,
    fontSize: 12,
    lineHeight: 17,
    color: THEME.COLOR.DARK_BLUE_TEXT,
    marginBottom: 5,
  },

  familyMembersContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  familyMemberName: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 17,
    color: THEME.COLOR.DARK_BLUE_TEXT,
    marginRight: 5,
  },

  point: {
    width: 4,
    height: 4,
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
    borderRadius: 4,
    marginRight: 5,
  },
});
