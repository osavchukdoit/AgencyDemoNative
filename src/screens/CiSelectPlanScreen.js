import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { THEME } from "../styles/theme";
import { FONTS } from "../styles/fonts";
import { TwoRadioButtonSelectQuestion } from "../components/ciSelectPlan/TwoRadioButtonSelectQuestion";
import { ThreeButtonsSelect } from "../components/ciSelectPlan/ThreeButtonsSelect";
import { CiPlanSector } from "../components/ciPlanOptionsPage/CiPlanSector";
import { CiSelectPlanTextAndSelect } from "../components/ciSelectPlan/CiSelectPlanTextAndSelect";
import { ButtonBenefitsCart } from "../components/familyInfoPage/ButtonBenefitsCart";
import { TopComponentPlanOptions } from "../components/utils/topComponents/TopComponentPlanOptions";
import { useState } from "react";
import { CheckboxAndText } from "../components/utils/CheckboxAndText";

export const CiSelectPlanScreen = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <ScrollView>
        <TopComponentPlanOptions
          imgMain={require("../assets/topComponent/ciPlanOptionTopPic.png")}
          textNormal={"Quality of Life Protection for the Unexpected!"}
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
          <CiPlanSector header={"Critical Illness $10,000"} />
          <CiPlanSector header={"Critical Illness $20,000"} />
          <CiSelectPlanTextAndSelect />
          <CheckboxAndText isChecked={isChecked} handleCheck={setIsChecked}>
            <Text style={styles.checkboxText}>Yes, I Accept</Text>
          </CheckboxAndText>
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

  checkboxText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.28,
    color: THEME.COLOR.GREY_LIGHT_TEXT,
  },
});
