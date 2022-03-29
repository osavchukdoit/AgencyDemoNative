import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";
import { commonPlanStyles } from "../../styles/commonPlanStyles";

export const TitleOfSelectedPlan = () => {
  return (
    <View style={styles.wrapper}>
      <Text
        style={[
          commonPlanStyles.planSectorHeader,
          styles.additionalMarginBottom,
        ]}
      >
        Enroll in Short Term Disability Plan
      </Text>
      <Text style={styles.subTitle}>Select a plan below</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 12,
  },

  additionalMarginBottom: {
    marginBottom: 5,
  },

  subTitle: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 16,
    color: THEME.COLOR.GREY_LIGHT_TEXT,
  },
});
