import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FONTS } from "../../styles/fonts";
import { THEME } from "../../styles/theme";
import { AppText } from "../utils/AppText";
import ShowHideIconSvg from "../../assets/icons/arrowUp.svg";
import { useState } from "react";
import { VoluntarySTD } from "./VoluntarySTD";
import { PseudoElement } from "../stdPlanOptions/PseudoElement";
import { shadowStyles } from "../../styles/shadowStyles";

export const BenefitGroups = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onHandlePress = () => {
    setIsVisible((prev) => {
      return !prev;
    });
  };

  return (
    <View style={[styles.benefitWrapper, shadowStyles.boxShadow]}>
      <View
        style={[
          styles.benefitTitleWrapper,
          !isVisible && styles.additionalMarginBottom,
        ]}
      >
        <AppText fontFamily={FONTS.AVENIR.HEAVY} style={styles.benefitTitle}>
          Income Protection
        </AppText>
        <TouchableOpacity
          style={[styles.buttonShowHide, isVisible && styles.rotate]}
          onPress={onHandlePress}
        >
          <ShowHideIconSvg />
        </TouchableOpacity>
      </View>
      <View style={isVisible ? { display: "flex" } : { display: "none" }}>
        <PseudoElement />
        <Text style={styles.benefitText}>
          Benefits designed to protect your income for a set period of time when
          you are unable to work due to an unexpected illness or injury
        </Text>
        <VoluntarySTD />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  benefitWrapper: {
    backgroundColor: THEME.COLOR.WHITE,
    paddingTop: 14,
    paddingBottom: 14,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginBottom: 20,
  },

  benefitTitleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    alignItems: "center",
  },

  additionalMarginBottom: {
    marginBottom: 0,
  },

  benefitTitle: {
    fontSize: 16,
    lineHeight: 21.8,
    color: THEME.COLOR.GREY_DARK_TEXT,
  },

  buttonShowHide: {
    width: 24,
    height: 24,
    backgroundColor: THEME.BACKGROUND.BUTTON_SHOW_HIDE_BG,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },

  rotate: {
    transform: [{ rotate: "180deg" }],
  },

  benefitText: {
    color: THEME.COLOR.GREY_DARK_TEXT,
    fontFamily: FONTS.AVENIR.MEDIUM,
    fontSize: 12,
    lineHeight: 16,
    marginTop: 7,
    marginBottom: 11,
  },
});
