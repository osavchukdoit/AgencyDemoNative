import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { PseudoElement } from "../stdPlanOptions/PseudoElement";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";
import SelectedIconSvg from "../../assets/icons/ciSelectPlan/selectedIcon.svg";
import { shadowStyles } from "../../styles/shadowStyles";

export const ThreeButtonsSelect = () => {
  return (
    <View style={[styles.sectorWrapper, shadowStyles.boxShadow]}>
      <Text style={styles.questionTitle}>Are you actively at work?</Text>
      <PseudoElement />
      <View style={styles.radioButtonsWrapper}>
        <View style={styles.radioButtonAndTextWrapper}>
          <TouchableOpacity style={styles.radioButton}>
            <SelectedIconSvg />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Brock Eggleston</Text>
        </View>
        <View style={styles.radioButtonAndTextWrapper}>
          <TouchableOpacity style={styles.radioButton}>
            <SelectedIconSvg />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Spouse</Text>
          <View style={styles.bluePoint}></View>
          <Text style={styles.buttonText}>Marry Eggleston</Text>
        </View>
        <View style={styles.radioButtonAndTextWrapper}>
          <TouchableOpacity style={styles.radioButton}>
            <SelectedIconSvg />
          </TouchableOpacity>
          <Text style={styles.buttonText}>Child</Text>
          <View style={styles.bluePoint}></View>
          <Text style={styles.buttonText}>Sarah Eggleston</Text>
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

  radioButtonAndTextWrapper: {
    flexDirection: "row",
    width: "50%",
    alignItems: "center",
    marginBottom: 18,
  },

  radioButton: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: THEME.BACKGROUND.MENU,
    marginRight: 9,
    justifyContent: "center",
    alignItems: "center",
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

  bluePoint: {
    height: 4,
    width: 4,
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
    marginLeft: 4,
    marginRight: 4,
    borderRadius: 4,
  },
});
