import { Text, View, StyleSheet } from "react-native";
import { PseudoElement } from "../stdPlanOptions/PseudoElement";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";
import { shadowStyles } from "../../styles/shadowStyles";
import { RadioButtonsCiSelectPlan } from "../utils/RadioButtonsCiSelectPlan";

export const TwoRadioButtonSelectQuestion = () => {
  return (
    <View style={[styles.sectorWrapper, shadowStyles.boxShadow]}>
      <Text style={styles.questionTitle}>Are you actively at work?</Text>
      <PseudoElement />
      <View style={styles.radioButtonsWrapper}>
        <RadioButtonsCiSelectPlan />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectorWrapper: {
    backgroundColor: THEME.COLOR.WHITE,
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingTop: 19,
    marginBottom: 20,
  },

  questionTitle: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.28,
    marginBottom: 9,
  },

  radioButtonsWrapper: {
    flexDirection: "row",
    marginTop: 18,
    paddingHorizontal: 2,
  },
});
