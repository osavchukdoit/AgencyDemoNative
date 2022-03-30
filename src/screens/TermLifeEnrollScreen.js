import { View, ScrollView, StyleSheet, Text } from "react-native";
import { TermPlanBiWeekly } from "../components/termLifePlanOptionsPage/TermPlanBiWeekly";
import { TermPlanSector } from "../components/termLifePlanOptionsPage/TermPlanSector";
import { TopComponentPlanOptions } from "../components/utils/topComponents/TopComponentPlanOptions";
import { commonPlanStyles } from "../styles/commonPlanStyles";
import { AgreementText } from "../components/termLifeEnroll/AgreementText";
import { CheckboxAndText } from "../components/utils/CheckboxAndText";
import { useState } from "react";
import { FONTS } from "../styles/fonts";
import { THEME } from "../styles/theme";

export const TermLifeEnrollScreen = () => {
  const [isChecked, setIsChecked] = useState(false);

  const onHandleCheck = () => {
    setIsChecked((prev) => !prev);
  };

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

          <CheckboxAndText isChecked={isChecked} onHandleCheck={onHandleCheck}>
            <Text style={styles.checkboxText}>Yes, I Accept</Text>
          </CheckboxAndText>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },

  checkboxText: {
    fontFamily: FONTS.AVENIR.ROMAN,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: -0.28,
    color: THEME.COLOR.GREY_LIGHT_TEXT,
  },
});
