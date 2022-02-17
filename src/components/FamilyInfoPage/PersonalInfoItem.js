import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";
import InfoCircleSvg from "../../assets/icons/familyInfoIcons/infoCircle.svg";
import CalendarIconSvg from "../../assets/icons/familyInfoIcons/calendar.svg";
import ArrowRoghtSvg from "../../assets/icons/familyInfoIcons/vectorRight.svg";
import { useState } from "react";

export const PersonalInfoItem = () => {
  const [isWarning, setIsWarning] = useState(true);

  const onHandleWarning = () => {
    setIsWarning((prev) => {
      return !prev;
    });
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.infoTitle}>Personal Info</Text>
      <View style={styles.infoWrapper}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>John Doe</Text>
          {isWarning && (
            <View style={styles.warningTextContainer}>
              <InfoCircleSvg />
              <Text style={styles.warningSubTitle}>Missing items</Text>
            </View>
          )}
        </View>
        <View style={styles.subInfoWrapper}>
          <View style={styles.subTextAndIconsContainer}>
            <CalendarIconSvg />
            <Text style={styles.baseDateText}>
              DOB: <Text style={styles.boldDateText}>09/09/1990</Text>
            </Text>
          </View>
          <View style={styles.arrowSvgContainer}>
            <TouchableOpacity
              onPress={onHandleWarning}
              style={styles.arrowButtom}
            >
              <ArrowRoghtSvg />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  infoTitle: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: -0.28,
    marginBottom: 10,
  },

  infoWrapper: {
    backgroundColor: THEME.COLOR.WHITE,
    shadowColor: THEME.BOX_SHADOW.COLOR_BLACK,
    shadowOpacity: THEME.BOX_SHADOW.OPACITY,
    shadowOffset: THEME.BOX_SHADOW.OFFSET,
    shadowRadius: 30,
    borderRadius: 20,
    paddingHorizontal: 23,
    paddingTop: 16,
    paddingBottom: 21,
  },

  subTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 11,
  },

  subTitle: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 22,
    color: THEME.COLOR.DARK_BLUE_TEXT,
  },

  warningTextContainer: {
    flexDirection: "row",
  },

  warningSubTitle: {
    fontFamily: FONTS.AVENIR.BOOK,
    fontSize: 16,
    lineHeight: 22,
    color: THEME.COLOR.WARNING_TEXT,
    marginLeft: 4,
  },

  subInfoWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  subTextAndIconsContainer: {
    flexDirection: "row",
  },

  baseDateText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 16,
    lineHeight: 22,
    color: THEME.COLOR.DARK_BLUE_TEXT,
    marginLeft: 9,
  },

  boldDateText: {
    fontFamily: FONTS.AVENIR.HEAVY,
  },

  arrowSvgContainer: {
    height: 11,
    width: 6,
  },

  arrowButtom: {
    height: "100%",
    width: "100%",
  },
});
