import React, { useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import { THEME } from "../styles/theme";
import { FONTS } from "../styles/fonts";
import { TwoRadioButtonSelectQuestion } from "../components/ciSelectPlan/TwoRadioButtonSelectQuestion";
import { ThreeButtonsSelect } from "../components/ciSelectPlan/ThreeButtonsSelect";
import { CiPlanSector } from "../components/ciPlanOptionsPage/CiPlanSector";
import { CiSelectPlanTextAndSelect } from "../components/ciSelectPlan/CiSelectPlanTextAndSelect";
import { ButtonBenefitsCart } from "../components/familyInfoPage/ButtonBenefitsCart";
import { TopComponentPlanOptions } from "../components/utils/topComponents/TopComponentPlanOptions";
import { CheckboxAndText } from "../components/utils/CheckboxAndText";
import { checkboxTextStyles } from "../components/utils/CheckboxTextStyles";
import { ModalWindow } from "../components/utils/ModalWindow";
import { WindowPlanElectionSaved } from "../components/utils/WindowPlanElectionSaved";

export const CiSelectPlanScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleModalVisible = () => setModalVisible(true);
  const handleModalInvisible = () => setModalVisible(false);
  return (
    <>
      <ScrollView>
        <ModalWindow isVisible={modalVisible}>
          <WindowPlanElectionSaved onCancel={handleModalInvisible} />
        </ModalWindow>
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
          <CheckboxAndText onModalVisible={handleModalVisible}>
            <Text style={checkboxTextStyles.checkboxText}>Yes, I Accept</Text>
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
});
