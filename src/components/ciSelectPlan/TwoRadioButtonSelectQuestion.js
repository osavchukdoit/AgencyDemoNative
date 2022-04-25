import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { PseudoElement } from "../stdPlanOptions/PseudoElement";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";
import { RadioButtonsCiSelectPlan } from "../utils/RadioButtonsCiSelectPlan";
import { BasicSectorWrapper } from "../utils/BasicSectorWrapper";

export const TwoRadioButtonSelectQuestion = () => {
  return (
    <BasicSectorWrapper>
      <Text style={styles.questionTitle}>Are you actively at work?</Text>
      <PseudoElement />
      <View style={styles.radioButtonsWrapper}>
        <RadioButtonsCiSelectPlan />
      </View>
    </BasicSectorWrapper>
  );
};

const styles = StyleSheet.create({
  questionTitle: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: FONTS.LETTER_SPACING.DEFAULT,
    marginBottom: 9,
    color: THEME.COLOR.GREY_DARK_TEXT,
  },

  radioButtonsWrapper: {
    flexDirection: "row",
    marginTop: 18,
    paddingHorizontal: 2,
  },
});
