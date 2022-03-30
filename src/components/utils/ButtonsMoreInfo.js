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
    <>
      <View style={styles.buttonsRowWrapper}>
        <TouchableOpacity style={styles.additionalMarginBottom}>
          <View style={[styles.button, styles.buttonActive]}>
            <DescriptionSvg />
          </View>
          <Text style={[styles.buttonText, styles.buttonTextActive]}>
            Description
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.additionalMarginBottom}>
          <View style={styles.button}>
            <CompareSvg />
          </View>
          <Text style={styles.buttonText}>Compare</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.additionalMarginBottom}>
          <View style={styles.button}>
            <CompareSvg />
          </View>
          <Text style={styles.buttonText}>Eligibility</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.additionalMarginBottom}>
          <View style={styles.button}>
            <WarningIconSvg />
          </View>
          <Text style={styles.buttonText}>Limitations</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsRowWrapper}>
        <TouchableOpacity style={styles.additionalMarginBottom}>
          <View style={styles.button}>
            <VideoIconSvg />
          </View>
          <Text style={styles.buttonText}>Video</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.additionalMarginBottom}>
          <View style={styles.button}>
            <CalculatorIconSvg />
          </View>
          <Text style={styles.buttonText}>Calculator</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.additionalMarginBottom}>
          <View style={styles.button}>
            <BotIconSvg />
          </View>
          <Text style={styles.buttonText}>STD bottom</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.additionalMarginBottom}>
          <View style={styles.button}>
            <FaqIconSvg />
          </View>
          <Text style={styles.buttonText}>FAQ</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  buttonsRowWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  button: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: THEME.BACKGROUND.BUTTON_SHOW_HIDE,
    marginBottom: 3,
  },

  additionalMarginBottom: {
    marginBottom: 13,
    alignItems: "center",
  },

  buttonActive: {
    backgroundColor: THEME.COLOR.BLUE_BRIGHT,
  },

  buttonText: {
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
