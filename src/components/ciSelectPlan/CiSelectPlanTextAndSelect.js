import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";
import { shadowStyles } from "../../styles/shadowStyles";

export const CiSelectPlanTextAndSelect = () => {
  return (
    <View style={[styles.sectorWrapper, shadowStyles.boxShadow]}>
      <Text style={styles.sectorText}>
        By submitting my election for coverage, I am attesting that I have read
        and agree to the posted Conditions of Enrollment document:
      </Text>
      <View style={styles.linkTextWrapper}>
        <Text style={styles.sectorText}>Review the </Text>
        <Text style={[styles.sectorText, styles.linkText]}>
          terms and conditions.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectorWrapper: {
    backgroundColor: THEME.COLOR.WHITE,
    borderRadius: 20,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    paddingBottom: 10,
    marginBottom: 15,
  },

  sectorText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.28,
    color: THEME.COLOR.GREY_LIGHT_TEXT,
    marginBottom: 9,
  },

  linkTextWrapper: {
    flexDirection: "row",
  },

  linkText: {
    color: THEME.COLOR.BLUE_BRIGHT,
    textDecorationLine: "underline",
  },
});
