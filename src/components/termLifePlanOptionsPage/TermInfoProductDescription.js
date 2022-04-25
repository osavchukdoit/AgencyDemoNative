import { Text, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";
import UmbrelaSvg from "../../assets/icons/plans/term.svg";
import { PlanSector } from "../utils/PlanSector";

export const TermInfoProductDescription = () => {
  return (
    <PlanSector logo={<UmbrelaSvg />} title={"Product Description"}>
      <Text style={styles.subTitleMedium}>
        The BML Voluntary Term Life and AD&D plan can help you protect your
        fiancee if you are diagnosed with a covered serious condition. The plan
        pays cash benefits to you if you are diagnosed with a heart attack,
        stroke, end stage renal failure, cancer and more. You can use the money
        to help cover your deductible or for everyday expenses like utility
        bills, mortgage payment and groceries. It’s up to you.
      </Text>

      <Text style={styles.subTextNormal}>
        Your plan also includes a health screening benefit for a covered
        preventive test.
      </Text>

      <Text style={styles.subTextNormal}>
        See the attached benefit summary for details of coverage, including
        limitations and exclusions.
      </Text>
    </PlanSector>
  );
};

const styles = StyleSheet.create({
  infoSectorWrapper: {
    paddingTop: 11,
    paddingBottom: 5,
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
    marginBottom: 11,
    color: THEME.COLOR.GREY_DARK_TEXT,
    marginTop: 16,
  },

  subTextNormal: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: FONTS.LETTER_SPACING.DEFAULT,
    marginBottom: 11,
    color: THEME.COLOR.GREY_DARK_TEXT,
  },
});
