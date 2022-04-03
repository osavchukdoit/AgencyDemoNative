import { Text, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";
import ThermometerSvg from "../../assets/icons/plans/ci.svg";
import { PlanSector } from "../utils/PlanSector";

export const CiInfoProductDescription = () => {
  return (
    <PlanSector logo={<ThermometerSvg />} title={"Product Description"}>
      <Text style={styles.subTitleMedium}>
        The Athena Critical Illness Plan can help you protect your finances if
        you are diagnosed with a covered serious condition. The plan pays cash
        benefits to you if you are diagnosed with a heart attack, stroke, end
        stage renal failure, cancer and more. You can use the money to help
        cover your deductible or for everyday expenses like utility bills,
        mortage payments and groceries. It’s up to you.
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
    letterSpacing: -0.28,
  },

  subTitleMedium: {
    fontFamily: FONTS.AVENIR.MEDIUM,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.28,
    marginBottom: 11,
    color: THEME.COLOR.GREY_DARK_TEXT,
    marginTop: 16,
  },

  subTextNormal: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.28,
    marginBottom: 11,
    color: THEME.COLOR.GREY_DARK_TEXT,
  },
});
