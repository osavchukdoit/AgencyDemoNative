import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { ButtonBenefitsCart } from "../components/familyInfoPage/ButtonBenefitsCart";
import { StdPlanSector } from "../components/stdPlanOptions/StdPlanSector";
import { TitleOfSelectedPlan } from "../components/stdSelectPlan/TitleOfSelectedPlan";
import { TopComponentPlanOptions } from "../components/utils/topComponents/TopComponentPlanOptions";
import { CheckboxAndText } from "../components/utils/CheckboxAndText";
import { checkboxTextStyles } from "../components/utils/CheckboxTextStyles";

export const StdSelectPlanScreen = () => {
  return (
    <>
      <ScrollView>
        <TopComponentPlanOptions
          imgMain={require("../assets/topComponent/stdPlanOptionTopPic.png")}
          textNormal={"Income Protection for the Unexpected!"}
          textBold={"Select Short Term Disability Plan"}
          imgSecondary={require("../assets/topComponent/stdGlobePic.png")}
          textDown={
            "Short term disability insurance can pay you a weekly benefit if you have a covered disability that keeps you from working."
          }
        />
        <View style={styles.wrapper}>
          <TitleOfSelectedPlan />
          <StdPlanSector isRadioButton={true} />
          <StdPlanSector isRadioButton={true} />
          <CheckboxAndText>
            <Text style={checkboxTextStyles.checkboxText}>
              I acknowledge that I have read the Pre-Existing Document
            </Text>
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
});
