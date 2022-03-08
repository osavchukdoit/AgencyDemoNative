import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { THEME } from "../../styles/theme";
import ConfirmIconSvg from "../../assets/icons/stdSelectPlanIcons/confirmIcon.svg";
import { FONTS } from "../../styles/fonts";

export const ConfirmReadSelectedPlan = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.buttonAndTextWrapper}>
        <TouchableOpacity style={styles.confirmButton}>
          <ConfirmIconSvg />
        </TouchableOpacity>
        <Text style={styles.confirmText}>
          I acknowledge that I have read the Pre-Existing Document
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    flexDirection: "row",
  },

  buttonAndTextWrapper: {
    flexDirection: "row",
  },

  confirmButton: {
    width: 16,
    height: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: THEME.COLOR.GREY_LIGHT_TEXT,
    backgroundColor: THEME.COLOR.BLUE_LIGHT,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 9,
  },

  confirmText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.28,
    color: THEME.COLOR.GREY_LIGHT_TEXT,
  },
});
