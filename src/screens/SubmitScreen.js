import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { OpenEnrollmentTerm } from "../components/submitPage/OpenEnrollmentTerm";
import { EnrollmentInfoTop } from "../components/utils/topComponents/EnrollmentInfoTop";
import { commonPlanStyles } from "../styles/commonPlanStyles";
import { SubmitSectorWrapper } from "../components/submitPage/SubmitSectorWrapper";
import { SubmitPersonInfo } from "../components/submitPage/SubmitPersonInfo";
import { SubmitPersonDependants } from "../components/submitPage/SubmitPersonDependants";
import {
  submitOptions,
  disclaimersPoints,
} from "../components/submitPage/submitOptions";
import { SubmitSelectedBenefits } from "../components/submitPage/SubmitSelectedBenefits";
import { SubmitTotalCost } from "../components/submitPage/SubmitTotalCost";
import { THEME } from "../styles/theme";
import { FONTS } from "../styles/fonts";
import { SubmitDisclaimersPoints } from "../components/submitPage/SubmitDisclaimersPoints";

const personOptions = [
  {
    name: "Mary Smith",
    value: "Spouse",
    id: 1,
  },
  {
    name: "Josh Doe",
    value: "Child",
    id: 2,
  },
];

export const SubmitScreen = () => {
  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <EnrollmentInfoTop
        title={"Please review your elections below"}
        subtitle={
          "Click on progress tracker below to update each section as needed"
        }
      >
        <OpenEnrollmentTerm />
      </EnrollmentInfoTop>
      <View style={styles.wrapper}>
        <Text style={commonPlanStyles.planSectorHeader}>Personal Info</Text>

        <SubmitSectorWrapper>
          <SubmitPersonInfo />
          <SubmitPersonDependants options={personOptions} />
        </SubmitSectorWrapper>

        <Text style={commonPlanStyles.planSectorHeader}>Selected Benefits</Text>

        {submitOptions.map((item) => {
          return (
            <SubmitSectorWrapper key={item.id}>
              <SubmitSelectedBenefits item={item} />
            </SubmitSectorWrapper>
          );
        })}

        <SubmitTotalCost options={submitOptions} />

        <Text
          style={[
            commonPlanStyles.planSectorHeader,
            styles.additionalMarginBottom,
          ]}
        >
          Please review disclaimers below
        </Text>
        <Text style={styles.subHeaderText}>Then click submit</Text>

        <SubmitDisclaimersPoints options={disclaimersPoints} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },

  additionalMarginBottom: {
    marginBottom: 3,
  },

  subHeaderText: {
    fontFamily: FONTS.AVENIR.MEDIUM,
    fontSize: 12,
    lineHeight: 16,
    marginBottom: 12,
    color: THEME.COLOR.GREY_MEDIUM_TEXT,
  },
});
