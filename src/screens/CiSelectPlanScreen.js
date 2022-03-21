import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { THEME } from "../styles/theme";
import { FONTS } from "../styles/fonts";
import { TwoRadioButtonSelectQuestion } from "../components/ciSelectPlan/TwoRadioButtonSelectQuestion";
import { ThreeButtonsSelect } from "../components/ciSelectPlan/ThreeButtonsSelect";
import { CiPlanSector } from "../components/ciPlanOptionsPage/CiPlanSector";
import { CiSelectPlanTextAndSelect } from "../components/ciSelectPlan/CiSelectPlanTextAndSelect";
import SelectedIconSvg from "../assets/icons/ciSelectPlan/selectedIcon.svg";
import { ButtonBenefitsCart } from "../components/familyInfoPage/ButtonBenefitsCart";
import { TopComponentPlanOptions } from "../components/utils/topComponents/TopComponentPlanOptions";

export const CiSelectPlanScreen = () => {
  return (
    <>
      <ScrollView>
        <TopComponentPlanOptions
          imgMain={require("../assets/topComponent/ciPlanOptionTopPic.png")}
          textnormal={"Quality of Life Protection for the Unexpected!"}
          textBold={"Select Critical Illness Plans"}
          imgSecondary={require("../assets/topComponent/stdGlobePic.png")}
          textDown={
            "Critical illness insurance can help you protect your finances if you are diagnosed with a covered serious condition. The plan pays benefits to you."
          }
        />
        <View style={styles.wrapper}>
          <Text style={styles.planTitle}>Enroll in Critical Illness Plan</Text>
          <TwoRadioButtonSelectQuestion />
          <ThreeButtonsSelect />
          <Text style={styles.subText}>Select a plan below</Text>
          <CiPlanSector isRadioButton={true} />
          <CiPlanSector isRadioButton={true} />
          <CiSelectPlanTextAndSelect />

          <View style={styles.radioButtonAndTextWrapper}>
            <TouchableOpacity style={styles.radioButton}>
              <SelectedIconSvg />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Yes, I Accept</Text>
          </View>
        </View>
      </ScrollView>
      <ButtonBenefitsCart />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },

  planTitle: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.28,
    color: THEME.COLOR.GREY_DARK_TEXT,
    marginBottom: 10,
  },

  subText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 16,
    color: THEME.COLOR.GREY_LIGHT_TEXT,
    marginBottom: 10,
  },

  radioButtonAndTextWrapper: {
    flexDirection: "row",
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

  buttonText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.28,
    color: THEME.COLOR.GREY_LIGHT_TEXT,
  },
});
