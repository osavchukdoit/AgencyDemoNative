import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { FONTS } from "../../styles/fonts";
import { THEME } from "../../styles/theme";
import { AppText } from "../utils/AppText";
import ShowHideIconSvg from "../../assets/icons/arrowUp.svg";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { VoluntarySTD } from "./VoluntarySTD";

export const BenefitGroups = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onHandlePress = () => {
    setIsVisible((prev) => {
      return !prev;
    });
  };

  return (
    <View style={[styles.wrapper, styles.shadowProp]}>
      <View style={styles.benefitWrapper}>
        <View style={styles.benefitTitleWrapper}>
          <AppText fontFamily={FONTS.AVENIR.HEAVY} style={styles.benefitTitle}>
            Income Protection
          </AppText>
          <View style={styles.containerButtonShowHide}>
            <TouchableOpacity
              style={
                isVisible
                  ? { ...styles.buttonShowHide }
                  : {
                      ...styles.buttonShowHide,
                      transform: [{ rotate: "180deg" }],
                    }
              }
              onPress={onHandlePress}
            >
              <Text>{<ShowHideIconSvg />}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={isVisible ? { display: "flex" } : { display: "none" }}>
          <View style={styles.gradientWrapper}>
            <LinearGradient
              colors={[
                "rgba(26, 60, 90, 0)",
                "rgba(26, 60, 90, 0.5)",
                "rgba(26, 60, 90, 0)",
              ]}
              style={styles.linearBackground}
              start={[1, 1]}
            />
          </View>
          <Text style={styles.benefitText}>
            Benefits designed to protect your income for a set period of time
            when you are unable to work due to an unexpected illness or injury
          </Text>
          <VoluntarySTD />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 20,
    paddingHorizontal: 20,
  },

  benefitWrapper: {
    backgroundColor: THEME.COLOR.WHITE,
    paddingTop: 14,
    paddingBottom: 14,
    paddingHorizontal: 15,
    borderRadius: 20,
  },

  shadowProp: {
    shadowColor: THEME.BOX_SHADOW.COLOR_BLACK,
    shadowOffset: THEME.BOX_SHADOW.OFFSET,
    shadowOpacity: THEME.BOX_SHADOW.OPACITY,
    shadowRadius: THEME.BOX_SHADOW.SHADOW_RADIUS,
  },

  benefitTitleWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  benefitTitle: {
    fontSize: 16,
    lineHeight: 21.8,
    color: THEME.COLOR.GREY_DARK_TEXT,
  },

  containerButtonShowHide: {
    width: 24,
    height: 24,
    backgroundColor: THEME.BACKGROUND.BUTTON_SHOW_HIDE_BG,
    borderRadius: 4,
  },

  buttonShowHide: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  gradientWrapper: {
    marginTop: 10,
    marginBottom: 7,
    height: 1,
  },

  linearBackground: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },

  benefitText: {
    color: THEME.COLOR.GREY_DARK_TEXT,
    fontFamily: FONTS.AVENIR.MEDIUM,
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 11,
  },
});
