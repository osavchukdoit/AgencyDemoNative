import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";

export default StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },

  planSectorWrapper: {
    padding: 11,
    paddingBottom: 22,
    backgroundColor: THEME.COLOR.WHITE,
    shadowColor: THEME.BOX_SHADOW.COLOR_BLACK,
    shadowOffset: THEME.BOX_SHADOW.OFFSET,
    shadowOpacity: THEME.BOX_SHADOW.OPACITY,
    shadowRadius: THEME.BOX_SHADOW.SHADOW_RADIUS,
    borderRadius: 20,
    marginBottom: 16,
  },

  focusPlanSectorBorder: {
    borderWidth: 1,
    borderColor: THEME.BACKGROUND.MENU,
  },

  iconAndTitleWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
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
    letterSpacing: -0.28,
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
    letterSpacing: -0.28,
    color: THEME.COLOR.BLACK,
  },

  subTitleAndButtonWrapper: {
    flexDirection: "row",
    paddingLeft: 4,
    paddingRight: 6,
    justifyContent: "space-between",
    marginBottom: 7,
    marginTop: 9,
  },

  subTitle: {
    fontFamily: FONTS.AVENIR.MEDIUM,
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.28,
    color: THEME.COLOR.GREY_DARK_TEXT,
  },

  buttonShowHide: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.BACKGROUND.BUTTON_SHOW_HIDE_BG,
    borderRadius: 4,
  },

  listWrapper: {
    paddingHorizontal: 2,
  },

  listItem: {
    flexDirection: "row",
    marginBottom: 9,
  },

  pointAndTitleWrapper: {
    flexDirection: "row",
    width: "50%",
    alignItems: "center",
  },

  listPoint: {
    width: 5,
    height: 5,
    backgroundColor: THEME.BACKGROUND.DARK_BLUE,
    borderRadius: 8,
    marginRight: 7,
  },

  itemTitle: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.28,
    color: THEME.COLOR.GREY_LIGHT_RGBA,
  },

  darkTextColor: {
    color: THEME.COLOR.BLUE_DARK_RGBA,
  },

  additionalItemBottomMargin: {
    marginBottom: 16,
  },

  linksWrapper: {
    paddingHorizontal: 4,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  iconAndLinkWrapper: {
    flexDirection: "row",
    alignItems: "center",
    width: "50%",
  },

  linkIcon: {
    marginRight: 6,
  },

  linkText: {
    fontFamily: FONTS.AVENIR.MEDIUM,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.28,
    color: THEME.COLOR.BLUE_BRIGHT,
    textDecorationLine: "underline",
  },
});