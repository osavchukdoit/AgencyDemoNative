import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme.js";
import { FONTS } from "../../styles/fonts.js";
import { PseudoElement } from "../stdPlanOptions/PseudoElement.js";
import { shadowStyles } from "../../styles/shadowStyles.js";

export const TermPlanBiWeekly = () => {
  return (
    <View style={[styles.planBiWeeklyWrapper, shadowStyles.boxShadow]}>
      <Text style={styles.sectorTitle}>
        Bi-Weekly costs for available Policies
      </Text>
      <PseudoElement />
      <View
        style={[styles.radioButtonAndTextWrapper, styles.additionalMarginTop]}
      >
        <TouchableOpacity style={styles.radioButton}></TouchableOpacity>
        <Text style={styles.costText}>$6.92 for $50,000 Policy</Text>
      </View>
      <View style={styles.radioButtonAndTextWrapper}>
        <TouchableOpacity style={styles.radioButton}></TouchableOpacity>
        <Text style={styles.costText}>$8.31 for $60,000 Policy</Text>
      </View>
      <View style={styles.radioButtonAndTextWrapper}>
        <TouchableOpacity style={styles.radioButton}></TouchableOpacity>
        <Text style={styles.costText}>$9.69 for $70,000 Policy</Text>
      </View>
      <View style={styles.radioButtonAndTextWrapper}>
        <TouchableOpacity style={styles.radioButton}></TouchableOpacity>
        <Text style={styles.costText}>$12.69 for $80,000 Policy</Text>
      </View>
      <View style={styles.radioButtonAndTextWrapper}>
        <TouchableOpacity style={styles.radioButton}></TouchableOpacity>
        <Text style={styles.costText}>$15.69 for $90,000 Policy</Text>
      </View>
      <View
        style={[
          styles.radioButtonAndTextWrapper,
          styles.additionalMarginBottom,
        ]}
      >
        <TouchableOpacity style={styles.radioButton}></TouchableOpacity>
        <Text style={styles.costText}>$18.69 for $100,000 Policy</Text>
      </View>

      <Text style={styles.sectorTitle}>
        Bi-Weekly costs for available Policies for Spouse
      </Text>
      <PseudoElement />
      <View
        style={[styles.radioButtonAndTextWrapper, styles.additionalMarginTop]}
      >
        <TouchableOpacity style={styles.radioButton}></TouchableOpacity>
        <Text style={styles.costText}>No coverage needed for my spouse</Text>
      </View>
      <View style={styles.radioButtonAndTextWrapper}>
        <TouchableOpacity style={styles.radioButton}></TouchableOpacity>
        <Text style={styles.costText}>$6.92 for $50,000 Policy</Text>
      </View>
      <View style={styles.radioButtonAndTextWrapper}>
        <TouchableOpacity style={styles.radioButton}></TouchableOpacity>
        <Text style={styles.costText}>$8.31 for $10,000 Policy</Text>
      </View>
      <View style={styles.radioButtonAndTextWrapper}>
        <TouchableOpacity style={styles.radioButton}></TouchableOpacity>
        <Text style={styles.costText}>$9.69 for $15,000 Policy</Text>
      </View>
      <View style={styles.radioButtonAndTextWrapper}>
        <TouchableOpacity style={styles.radioButton}></TouchableOpacity>
        <Text style={styles.costText}>$12.69 for $20,000 Policy</Text>
      </View>
      <View
        style={[
          styles.radioButtonAndTextWrapper,
          styles.additionalMarginBottom,
        ]}
      >
        <TouchableOpacity style={styles.radioButton}></TouchableOpacity>
        <Text style={styles.costText}>$15.69 for $25,000 Policy</Text>
      </View>

      <Text style={styles.sectorTitle}>
        Bi-Weekly costs for available Policies for Children
      </Text>
      <PseudoElement />
      <View
        style={[styles.radioButtonAndTextWrapper, styles.additionalMarginTop]}
      >
        <TouchableOpacity style={styles.radioButton}></TouchableOpacity>
        <Text style={styles.costText}>No coverage needed for my spouse</Text>
      </View>
      <View
        style={[
          styles.radioButtonAndTextWrapper,
          styles.additionalMarginBottom,
        ]}
      >
        <TouchableOpacity style={styles.radioButton}></TouchableOpacity>
        <Text style={styles.costText}>$1.05 for $10,000 Policy</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  planBiWeeklyWrapper: {
    paddingTop: 19,
    paddingHorizontal: 15,
    paddingBottom: 5,
    backgroundColor: THEME.COLOR.WHITE,
    borderRadius: 20,
    marginBottom: 20,
  },

  sectorTitle: {
    color: THEME.COLOR.GREY_DARK_TEXT,
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.28,
    marginBottom: 9,
  },

  radioButtonAndTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 11,
  },

  additionalMarginTop: {
    marginTop: 17,
  },

  additionalMarginBottom: {
    marginBottom: 19,
  },

  radioButton: {
    width: 13,
    height: 13,
    borderWidth: 1,
    borderColor: THEME.COLOR.DARK_BLUE_TEXT,
    borderRadius: 8,
    marginRight: 10,
  },

  costText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.28,
    color: THEME.COLOR.GREY_LIGHT_TEXT,
  },
});
