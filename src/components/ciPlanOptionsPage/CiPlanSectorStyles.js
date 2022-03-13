import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";

export default StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    marginBottom: 15,
  },

  planSectorWrapper: {
    padding: 11,
    paddingBottom: 17,
    backgroundColor: THEME.COLOR.WHITE,
    shadowColor: THEME.BOX_SHADOW.COLOR_BLACK,
    shadowOffset: THEME.BOX_SHADOW.OFFSET,
    shadowOpacity: THEME.BOX_SHADOW.OPACITY,
    shadowRadius: THEME.BOX_SHADOW.SHADOW_RADIUS,
    borderRadius: 20,
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

  subTitleAndButtonWrapper: {
    flexDirection: "row",
    paddingLeft: 4,
    paddingRight: 6,
    justifyContent: "space-between",
    marginBottom: 9,
    marginTop: 12,
  },

  subTitleWrapper: {
    paddingLeft: 4,
    marginBottom: 9,
    marginTop: 12,
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
    paddingHorizontal: 4,
  },

  listItem: {
    flexDirection: "row",
    marginBottom: 9,
  },

  pointAndTitleWrapper: {
    flexDirection: "row",
    width: "80%",
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
    marginBottom: 13,
  },

  linksWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
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

  costListWrapper: {
    backgroundColor: THEME.BACKGROUND.VERY_LIGHT_BLUE_V1,
    borderRadius: 8,
  },

  titlesItemsWrapper: {
    flexDirection: "row",
    paddingLeft: 18,
    height: 33,
    alignItems: "center",
  },

  itemsBackgroundColor: {
    backgroundColor: THEME.BACKGROUND.VERY_LIGHT_BLUE_V2,
  },

  titleItems: {
    fontFamily: FONTS.AVENIR.MEDIUM,
    fontSize: 13,
    lineHeight: 17.76,
    letterSpacing: -0.28,
    color: THEME.COLOR.BLUE_BRIGHT,
  },

  additionalWidth: {
    width: "65%",
  },

  textItemsWrapper: {
    flexDirection: "row",
    height: 33,
    paddingLeft: 18,
    alignItems: "center",
  },

  textItems: {
    fontFamily: FONTS.AVENIR.BOOK,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.28,
    color: THEME.COLOR.GREY_DARK_TEXT,
    opacity: 0.45,
    width: "65%",
  },

  numberItems: {
    fontFamily: FONTS.AVENIR.BOOK,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.28,
    color: THEME.COLOR.GREY_DARK_TEXT,
  },
});
