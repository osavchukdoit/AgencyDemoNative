import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { PseudoElement } from "../stdPlanOptions/PseudoElement";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";
import { shadowStyles } from "../../styles/shadowStyles";
import { CheckboxAndText } from "../utils/CheckboxAndText";
import { checkboxTextStyles } from "../utils/CheckboxTextStyles";

export const ThreeButtonsSelect = () => {
  return (
    <View style={[styles.sectorWrapper, shadowStyles.boxShadow]}>
      <Text style={styles.questionTitle}>
        Who all needs to be covered in the plan?
      </Text>
      <PseudoElement />
      <View style={styles.radioButtonsWrapper}>
        <CheckboxAndText>
          <Text style={checkboxTextStyles.checkboxText}>Brock Eggleston</Text>
        </CheckboxAndText>

        <CheckboxAndText>
          <Text style={checkboxTextStyles.checkboxText}>Spouse</Text>
          <View style={styles.bluePoint}></View>
          <Text style={checkboxTextStyles.checkboxText}>Marry Eggleston</Text>
        </CheckboxAndText>

        <CheckboxAndText>
          <Text style={checkboxTextStyles.checkboxText}>Child</Text>
          <View style={styles.bluePoint}></View>
          <Text style={checkboxTextStyles.checkboxText}>Sarah Eggleston</Text>
        </CheckboxAndText>
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
    paddingBottom: 5,
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
    marginTop: 15,
    paddingHorizontal: 2,
  },

  bluePoint: {
    height: 4,
    width: 4,
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
    marginLeft: 4,
    marginRight: 4,
    borderRadius: 4,
  },
});
