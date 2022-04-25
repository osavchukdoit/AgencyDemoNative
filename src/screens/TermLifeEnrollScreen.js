import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import { TermPlanBiWeekly } from "../components/termLifePlanOptionsPage/TermPlanBiWeekly";
import { TermPlanSector } from "../components/termLifePlanOptionsPage/TermPlanSector";
import { TopComponentPlanOptions } from "../components/utils/topComponents/TopComponentPlanOptions";
import { commonPlanStyles } from "../styles/commonPlanStyles";
import { AgreementText } from "../components/termLifeEnroll/AgreementText";
import { CheckboxAndText } from "../components/utils/CheckboxAndText";
import { checkboxTextStyles } from "../components/utils/CheckboxTextStyles";
import { ModalWindow } from "../components/utils/ModalWindow";
import { WindowPlanElectionSaved } from "../components/utils/WindowPlanElectionSaved";

export const TermLifeEnrollScreen = () => {
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
          imgMain={require("../assets/topComponent/termLifePlanOptionsTopPage.png")}
          textNormal={"Financial Protection for the Unexpected!"}
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

          <CheckboxAndText onModalVisible={handleModalVisible}>
            <Text style={checkboxTextStyles.checkboxText}>Yes, I Accept</Text>
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
});
