import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import { THEME } from "../../styles/theme";
import { FONTS } from "../../styles/fonts";
import DescriptionSvg from "../../assets/icons/stdPlanOptions/descriptionIcon.svg";
import CompareSvg from "../../assets/icons/stdPlanOptions/compareIcon.svg";
import WarningIconSvg from "../../assets/icons/stdPlanOptions/warningIcon.svg";
import VideoIconSvg from "../../assets/icons/stdPlanOptions/videoIcon.svg";
import CalculatorIconSvg from "../../assets/icons/stdPlanOptions/calculatorBigIcon.svg";
import BotIconSvg from "../../assets/icons/stdPlanOptions/stdBotIcon.svg";
import FaqIconSvg from "../../assets/icons/stdPlanOptions/faqIcon.svg";

export const ButtonsMoreInfo = () => {
  return (
    <View style={styles.wrapper}>
      <TouchableOpacity style={[styles.button, styles.buttonActive]}>
        <DescriptionSvg />
        <Text style={[styles.buttonText, styles.buttonTextActive]}>
          Description
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <CompareSvg />
        <Text style={styles.buttonText}>Compare</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <CompareSvg />
        <Text style={styles.buttonText}>Eligibility</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.additionalMarginRight]}>
        <WarningIconSvg />
        <Text style={styles.buttonText}>Limitations</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <VideoIconSvg />
        <Text style={styles.buttonText}>Video</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <CalculatorIconSvg />
        <Text style={styles.buttonText}>Calculator</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <BotIconSvg />
        <Text style={styles.buttonText}>STD bottom</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, styles.additionalMarginRight]}>
        <FaqIconSvg />
        <Text style={styles.buttonText}>FAQ</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    marginBottom: 3,
    flexWrap: "wrap",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  button: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: THEME.BACKGROUND.BUTTON_SHOW_HIDE_BG,
    marginRight: 36,
    marginBottom: 29,
    position: "relative",
  },

  additionalMarginRight: {
    marginRight: 0,
  },

  buttonActive: {
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
  },

  buttonText: {
    position: "absolute",
    bottom: -16,
    fontFamily: FONTS.AVENIR.MEDIUM,
    fontSize: 10,
    lineHeight: 14,
    color: THEME.COLOR.GREY_LIGHT_TEXT_V3,
  },

  buttonTextActive: {
    color: THEME.COLOR.BLUE_BRIGHT,
    fontFamily: FONTS.AVENIR.HEAVY,
  },
});
