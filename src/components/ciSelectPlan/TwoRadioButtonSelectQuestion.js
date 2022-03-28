import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { PseudoElement } from "../stdPlanOptions/PseudoElement";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";
import { shadowStyles } from "../../styles/shadowStyles";

export const TwoRadioButtonSelectQuestion = () => {
  return (
    <View style={[styles.sectorWrapper, shadowStyles.boxShadow]}>
      <Text style={styles.questionTitle}>Are you actively at work?</Text>
      <PseudoElement />
      <View style={styles.radioButtonsWrapper}>
        <View style={styles.radioButtonAndTextWrapper}>
          <TouchableOpacity style={styles.radioButton}>
            <View style={[styles.point, styles.displayNone]}></View>
          </TouchableOpacity>
          <Text style={styles.buttonText}>Yes</Text>
        </View>
        <View style={styles.radioButtonAndTextWrapper}>
          <TouchableOpacity style={styles.radioButton}>
            <View style={[styles.point, styles.displayNone]}></View>
          </TouchableOpacity>
          <Text style={styles.buttonText}>Yes</Text>
        </View>
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
    paddingBottom: 22,
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

  radioButtonAndTextWrapper: {
    flexDirection: "row",
    width: "50%",
    alignItems: "center",
  },

  radioButton: {
    width: 13,
    height: 13,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: THEME.COLOR.DARK_BLUE_TEXT,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  point: {
    width: 7,
    height: 7,
    backgroundColor: THEME.COLOR.DARK_BLUE_TEXT,
    borderRadius: 6,
  },

  displayNone: {
    display: "none",
  },

  buttonText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.28,
    color: THEME.COLOR.GREY_LIGHT_TEXT,
  },
});
