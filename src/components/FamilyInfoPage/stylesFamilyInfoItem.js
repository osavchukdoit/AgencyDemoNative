import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";

export default StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },

  infoTitle: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: -0.28,
    marginBottom: 10,
  },

  infoWrapper: {
    backgroundColor: THEME.COLOR.WHITE,
    shadowColor: THEME.BOX_SHADOW.COLOR_BLACK,
    shadowOpacity: THEME.BOX_SHADOW.OPACITY,
    shadowOffset: THEME.BOX_SHADOW.OFFSET,
    shadowRadius: 30,
    borderRadius: 20,
    paddingHorizontal: 23,
    paddingTop: 16,
    paddingBottom: 21,
    marginBottom: 20,
  },

  subTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 11,
  },

  subTitle: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 22,
    color: THEME.COLOR.DARK_BLUE_TEXT,
  },

  warningTextContainer: {
    flexDirection: "row",
  },

  warningSubTitle: {
    fontFamily: FONTS.AVENIR.BOOK,
    fontSize: 16,
    lineHeight: 22,
    color: THEME.COLOR.WARNING_TEXT,
    marginLeft: 4,
  },

  subInfoWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  subTextAndIconsContainer: {
    flexDirection: "row",
  },

  iconSvgWrapper: {
    marginRight: 9,
  },

  baseText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 16,
    lineHeight: 22,
    color: THEME.COLOR.DARK_BLUE_TEXT,
  },

  boldText: {
    fontFamily: FONTS.AVENIR.HEAVY,
  },

  arrowButtom: {
    height: 11,
    width: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});
