import { StyleSheet } from "react-native";
import { THEME } from "./theme";
import { FONTS } from "./fonts";

export const commonPlanStyles = StyleSheet.create({
  planSectorHeader: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: FONTS.LETTER_SPACING.DEFAULT,
    marginBottom: 10,
    color: THEME.COLOR.GREY_DARK_TEXT,
  },
});
