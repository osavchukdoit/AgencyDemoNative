import { StyleSheet } from "react-native";
import { FONTS } from "../styles/fonts";
import { THEME } from "../styles/theme";

export const styles = StyleSheet.create({
  nameWrapper: {
    width: 152,
    position: "relative",
    marginBottom: 11,
  },
  titleInfo: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 16,
    lineHeight: 22,
    color: THEME.COLOR.GREY_DARK_TEXT,
    marginBottom: 9,
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
    justifyContent: "center",
    overflow: "hidden"
  },
  statictext: {
    lineHeight: 49,
  },
});
