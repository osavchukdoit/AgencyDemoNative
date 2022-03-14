import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { CiPlanOptionsTop } from "../components/ciPlanOptionsPage/CiPlanOptionsTop";
import { THEME } from "../styles/theme";
import { FONTS } from "../styles/fonts";
import { TwoRadioButtonSelectQuestion } from "../components/ciSelectPlan/TwoRadioButtonSelectQuestion";
import { ThreeButtonsSelect } from "../components/ciSelectPlan/ThreeButtonsSelect";
import { CiPlanSector } from "../components/ciPlanOptionsPage/CiPlanSector";
import { CiSelectPlanTextAndSelect } from "../components/ciSelectPlan/CiSelectPlanTextAndSelect";
import SelectedIconSvg from "../assets/icons/ciSelectPlan/selectedIcon.svg";
import { ButtonBenefitsCart } from "../components/familyInfoPage/ButtonBenefitsCart";

export const CiSelectPlanScreen = () => {
  return (
    <View>
      <ScrollView>
        <CiPlanOptionsTop />
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
      </ScrollView>
      <ButtonBenefitsCart />
    </View>
  );
};

const styles = StyleSheet.create({
  planTitle: {
    fontFamily: FONTS.AVENIR.HEAVY,
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.28,
    color: THEME.COLOR.GREY_DARK_TEXT,
    marginLeft: 20,
    marginBottom: 10,
  },

  subText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 16,
    color: THEME.COLOR.GREY_LIGHT_TEXT,
    marginLeft: 21,
    marginBottom: 10,
  },

  radioButtonAndTextWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
    marginLeft: 20,
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
