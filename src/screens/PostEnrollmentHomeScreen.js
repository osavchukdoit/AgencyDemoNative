import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { submitOptions } from "../components/submitPage/submitOptions";
import { SubmitTotalCost } from "../components/submitPage/SubmitTotalCost";
import { HomeAndPostTop } from "../components/utils/topComponents/HomeAndPostTop";
import { BasicSectorWrapper } from "../components/utils/BasicSectorWrapper"; 
import { SubscriberDependants } from "../components/postEnrollmentHomePage/SubscriberDependants";
import { DependantsItemMapper } from "../components/postEnrollmentHomePage/DependantsItemMapper";
import {
  postPlanOptions,
  personDependants,
  planInformation,
} from "../components/postEnrollmentHomePage/postPlanOptions";
import { PostPlanSector } from "../components/postEnrollmentHomePage/PostPlanSector";
import { ShowHideButtonAndText } from "../components/utils/ShowHideButtonAndText";
import { FONTS } from "../styles/fonts";
import { THEME } from "../styles/theme";
import { InformationMapper } from "../components/postEnrollmentHomePage/InformationMapper";
import { PseudoElement } from "../components/stdPlanOptions/PseudoElement";
import { LinkIconAndText } from "../components/postEnrollmentHomePage/LinkIconAndText";
import { commonPlanStyles } from "../styles/commonPlanStyles";
import { SectorWithTextAndButton } from "../components/postEnrollmentHomePage/SectorWithTextAndButton";

export const PostEnrollmentHomeScreen = () => {
  const [isVisiblePlanInformation, setVisiblePlanInformation] = useState(true);
  const [isVisibleMemberServiceInformation, setMemberServiceInformation] =
    useState(true);

  const handleChangePlanInformation = () =>
    setVisiblePlanInformation((prev) => !prev);

  const handleChangeMemberServiceInformation = () =>
    setMemberServiceInformation((prev) => !prev);

  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <HomeAndPostTop
        title={
          "Lockheed 2 Industries Inc working with Brown Agencies Inc has created a best-in-class benefits program to meet your benefit needs. Below are the benefits offered in this enrollment."
        }
      />
      <View style={styles.wrapper}>
        <BasicSectorWrapper>
          <SubscriberDependants>
            <DependantsItemMapper options={personDependants} />
          </SubscriberDependants>
        </BasicSectorWrapper>
        <SubmitTotalCost options={submitOptions} />

        {postPlanOptions.map((item) => {
          return (
            <PostPlanSector key={item.id} options={item}>
              {!isVisiblePlanInformation && <PseudoElement />}
              <ShowHideButtonAndText
                isMarginTop={true}
                isVisible={isVisiblePlanInformation}
                handlePress={handleChangePlanInformation}
              >
                <Text style={styles.subSectorTitle}>Key Plan Information</Text>
              </ShowHideButtonAndText>
              {isVisiblePlanInformation && (
                <InformationMapper options={planInformation} />
              )}
              {!isVisibleMemberServiceInformation && <PseudoElement />}
              <ShowHideButtonAndText
                isMarginTop={true}
                isVisible={isVisibleMemberServiceInformation}
                handlePress={handleChangeMemberServiceInformation}
              >
                <Text style={styles.subSectorTitle}>
                  Member Service Information
                </Text>
              </ShowHideButtonAndText>
              {isVisibleMemberServiceInformation && (
                <InformationMapper options={planInformation} />
              )}

              <LinkIconAndText rightSide={true} />
            </PostPlanSector>
          );
        })}

        <Text style={commonPlanStyles.planSectorHeader}>
          Waivers and Documents
        </Text>

        <BasicSectorWrapper>
          <LinkIconAndText text={"Download Enrollment Summary Document"} />
          <LinkIconAndText text={"Download Employee Benefits Guide"} />
          <LinkIconAndText text={"Download Employee Benefits FAQ"} />
        </BasicSectorWrapper>

        <SectorWithTextAndButton/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },

  subSectorTitle: {
    fontFamily: FONTS.AVENIR.MEDIUM,
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: FONTS.LETTER_SPACING.DEFAULT,
    color: THEME.COLOR.GREY_DARK_TEXT,
  },
});
