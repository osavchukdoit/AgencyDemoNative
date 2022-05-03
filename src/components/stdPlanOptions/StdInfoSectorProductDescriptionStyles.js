import { StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";

export default StyleSheet.create({
  infoSectorWrapper: {
    paddingTop: 11,
    paddingBottom: 14,
    paddingHorizontal: 15,
    backgroundColor: THEME.COLOR.WHITE,
    borderRadius: 20,
    marginBottom: 16,
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
    marginRight: 11,
  },

  sectorTitle: {
    color: THEME.COLOR.GREY_DARK_TEXT,
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: FONTS.LETTER_SPACING.DEFAULT,
  },

  subTitleMedium: {
    fontFamily: FONTS.AVENIR.MEDIUM,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: FONTS.LETTER_SPACING.DEFAULT,
    marginBottom: 16,
    marginTop: 16,
    color: THEME.COLOR.GREY_DARK_TEXT,
  },

  subTextNormal: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: FONTS.LETTER_SPACING.DEFAULT,
    color: THEME.COLOR.GREY_DARK_TEXT,
    marginBottom: 7,
  },

  pointAndTitleWrapper: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    position: "relative",
    marginBottom: 11,
  },

  point: {
    width: 5,
    height: 5,
    backgroundColor: THEME.BACKGROUND.DARK_BLUE,
    borderRadius: 8,
    position: "absolute",
    top: 6,
  },

  itemTitle: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: FONTS.LETTER_SPACING.DEFAULT,
    color: THEME.COLOR.GREY_LIGHT_TEXT,
    marginLeft: 9,
  },
});
