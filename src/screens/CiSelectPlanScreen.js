import { View, ScrollView, Text, StyleSheet } from "react-native";
import { CiPlanOptionsTop } from "../components/ciPlanOptionsPage/CiPlanOptionsTop";
import { THEME } from "../styles/theme";
import { FONTS } from "../styles/fonts";
import { TwoRadioButtonSelectQuestion } from "../components/ciSelectPlan/TwoRadioButtonSelectQuestion";
import { ThreeButtonsSelect } from "../components/ciSelectPlan/ThreeButtonsSelect";
import CiPlanSectorStyles from "../components/ciPlanOptionsPage/CiPlanSectorStyles";
import { CiPlanSector } from "../components/ciPlanOptionsPage/CiPlanSector";

export const CiSelectPlanScreen = () => {
  return (
    <View>
      <ScrollView>
        <CiPlanOptionsTop />
        <Text style={styles.planTitle}>Enroll in Critical Illness Plan</Text>
        <TwoRadioButtonSelectQuestion />
        <ThreeButtonsSelect />
        <Text style={styles.subText}>Select a plan below</Text>
        <CiPlanSector/>
        <CiPlanSector/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  planTitle: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.28,
    color: THEME.COLOR.GREY_DARK_TEXT,
    marginLeft: 20,
    marginBottom: 10,
  },

  subText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 16,
    color: THEME.COLOR.GREY_LIGHT_TEXT,
    marginLeft: 21,
    marginBottom: 10,
  },
});
