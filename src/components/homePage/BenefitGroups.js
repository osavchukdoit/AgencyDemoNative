import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { FONTS } from "../../styles/fonts";
import { THEME } from "../../styles/theme";
import { AppText } from "../utils/AppText";
import { PseudoElement } from "../stdPlanOptions/PseudoElement";
import { ShowHideButtonAndText } from "../utils/ShowHideButtonAndText";
import { BasicSectorWrapper } from "../utils/BasicSectorWrapper";

export const BenefitGroups = ({ title, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handlePress = () => {
    setIsVisible((prev) => {
      return !prev;
    });
  };

  return (
    <BasicSectorWrapper>
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
    </BasicSectorWrapper>
  );
};

const styles = StyleSheet.create({
  benefitTitle: {
    fontSize: 16,
    lineHeight: 21.8,
    color: THEME.COLOR.GREY_DARK_TEXT,
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
