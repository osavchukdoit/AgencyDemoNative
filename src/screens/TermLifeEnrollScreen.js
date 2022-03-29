import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { TermPlanBiWeekly } from "../components/termLifePlanOptionsPage/TermPlanBiWeekly";
import { TermPlanSector } from "../components/termLifePlanOptionsPage/TermPlanSector";
import { TopComponentPlanOptions } from "../components/utils/topComponents/TopComponentPlanOptions";
import { commonPlanStyles } from "../styles/commonPlanStyles";
import { THEME } from "../styles/theme";
import { FONTS } from "../styles/fonts";
import SelectedIconSvg from "../assets/icons/ciSelectPlan/selectedIcon.svg";
import { AgreementText } from "../components/termLifeEnroll/AgreementText";

export const TermLifeEnrollScreen = () => {
  return (
    <>
      <ScrollView>
        <TopComponentPlanOptions
          imgMain={require("../assets/topComponent/termLifePlanOptionsTopPage.png")}
          textnormal={"Financial Protection for the Unexpected!"}
          textBold={"Select Term Life Plans"}
          imgSecondary={require("../assets/topComponent/stdGlobePic.png")}
          textDown={
            "Term Life insurance peovides cash benefits to help your family pay or expances such as funeral expances, incom replacement, mortgage."
          }
        />
        <View style={styles.wrapper}>
          <Text style={commonPlanStyles.planSectorHeader}>
            Enroll in Term Life Plan
          </Text>
          <TermPlanSector />
          <TermPlanBiWeekly />
          <AgreementText />

          <View style={styles.radioButtonAndTextWrapper}>
            <TouchableOpacity style={styles.radioButton}>
              <SelectedIconSvg />
            </TouchableOpacity>
            <Text style={styles.buttonText}>Yes, I Accept</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
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
