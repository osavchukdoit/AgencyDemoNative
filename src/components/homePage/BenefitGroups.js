import { View, StyleSheet, Text } from "react-native";
import { FONTS } from "../../styles/fonts";
import { THEME } from "../../styles/theme";
import { AppText } from "../utils/AppText";
import { useState } from "react";
import { PseudoElement } from "../stdPlanOptions/PseudoElement";
import { shadowStyles } from "../../styles/shadowStyles";
import { ShowHideButtonAndText } from "../utils/ShowHideButtonAndText";

export const BenefitGroups = ({ title, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handlePress = () => {
    setIsVisible((prev) => {
      return !prev;
    });
  };

  return (
    <View
      style={[
        styles.benefitWrapper,
        shadowStyles.boxShadow,
        isVisible && styles.additionalPaddingBottom,
      ]}
    >
      <ShowHideButtonAndText isVisible={isVisible} handlePress={handlePress}>
        <AppText fontFamily={FONTS.AVENIR.HEAVY} style={styles.benefitTitle}>
          {title}
        </AppText>
      </ShowHideButtonAndText>

      <View style={isVisible ? { display: "flex" } : { display: "none" }}>
        <PseudoElement />
        <Text style={styles.benefitText}>
          Benefits designed to protect your income for a set period of time when
          you are unable to work due to an unexpected illness or injury
        </Text>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  benefitWrapper: {
    backgroundColor: THEME.COLOR.WHITE,
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginBottom: 20,
  },

  additionalPaddingBottom: {
    paddingBottom: 0,
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
    backgroundColor: THEME.BACKGROUND.BUTTON_SHOW_HIDE,
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
