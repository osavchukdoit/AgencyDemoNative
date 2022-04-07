import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { PseudoElement } from "../stdPlanOptions/PseudoElement";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";
import { shadowStyles } from "../../styles/shadowStyles";
import { CheckboxAndText } from "../utils/CheckboxAndText";

export const ThreeButtonsSelect = () => {
  return (
    <View style={[styles.sectorWrapper, shadowStyles.boxShadow]}>
      <Text style={styles.questionTitle}>
        Who all needs to be covered in the plan?
      </Text>
      <PseudoElement />
      <View style={styles.radioButtonsWrapper}>
        <CheckboxAndText>
          <Text style={styles.buttonText}>Brock Eggleston</Text>
        </CheckboxAndText>

        <CheckboxAndText>
          <Text style={styles.buttonText}>Spouse</Text>
          <View style={styles.bluePoint}></View>
          <Text style={styles.buttonText}>Marry Eggleston</Text>
        </CheckboxAndText>

        <CheckboxAndText>
          <Text style={styles.buttonText}>Child</Text>
          <View style={styles.bluePoint}></View>
          <Text style={styles.buttonText}>Sarah Eggleston</Text>
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

  buttonText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.28,
    color: THEME.COLOR.GREY_LIGHT_TEXT,
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
