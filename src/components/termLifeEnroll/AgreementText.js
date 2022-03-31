import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";
import { shadowStyles } from "../../styles/shadowStyles";

export const AgreementText = () => {
  return (
    <View style={[styles.sectorWrapper, shadowStyles.boxShadow]}>
      <Text style={styles.sectorText}>
        I apply for the insurance for which I am now eligible (or for which I
        may become eligible) under the provisions of the Group Policy or Group
        Policies issued to my employer by the Boston Mutual Life Insurance
        Company and outhorize deductions, if any, from my earning of the
        required premium contribution toward the cost of the insurance. I
        understand that if I am disabled on the date my insurance would
        otherwise become effective, I shall only become insured on the date I
        return to active full-time work. I further understand that if I decline
        insurance coverage for which I am now eligible and I desire to
        participate in the plan at a later date, I must furnish, at my own
        expense, evidence of insurability satisfactory to Boston Mutual Life
        Insurance Company.
      </Text>
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
});
