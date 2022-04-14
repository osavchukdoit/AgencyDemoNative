import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { BenefitGroups } from "../components/homePage/BenefitGroups";
import { ButtonEnrollment } from "../components/homePage/ButtonEnrollment";
import { BenefitSubSector } from "../components/homePage/BenefitSubSector";
import { CostOverview } from "../components/homePage/CostOverview";
import CruthesSvg from "../assets/icons/plans/std.svg";
import WheelchairSvg from "../assets/icons/plans/ltd.svg";
import UmbrelaSvg from "../assets/icons/plans/term.svg";
import ThermometrSvg from "../assets/icons/plans/ci.svg";
import HospitalBedSvg from "../assets/icons/plans/hospital.svg";
import { HomeAndPostTop } from "../components/utils/topComponents/HomeAndPostTop";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.scrollWrapper}>
      <ScrollView stickyHeaderIndices={[0]} style={styles.scrollContainer}>
        <HomeAndPostTop
          title={
            "Lockheed 2 Industries Inc working with Brown Agencies Inc has created a best-in-class benefits program to meet your benefit needs. Below are the benefits offered in this enrollment."
          }
          subtitle={
            "View details by clicking on each and select which one you would like to enroll to"
          }
        />
        <View style={styles.wrapper}>
          <BenefitGroups title={"Income Protection"}>
            <BenefitSubSector
              logoSubSector={<CruthesSvg />}
              titleSubSector={"Voluntary STD"}
            >
              <CostOverview />
            </BenefitSubSector>
            <BenefitSubSector
              logoSubSector={<WheelchairSvg />}
              titleSubSector={"Voluntary LTD"}
            >
              <CostOverview />
            </BenefitSubSector>
          </BenefitGroups>

          <BenefitGroups title={"Financial Protection"}>
            <BenefitSubSector
              logoSubSector={<UmbrelaSvg />}
              titleSubSector={"Term Life"}
            >
              <CostOverview />
            </BenefitSubSector>
            <BenefitSubSector
              logoSubSector={<UmbrelaSvg />}
              titleSubSector={"Whole Life"}
            >
              <CostOverview />
            </BenefitSubSector>
          </BenefitGroups>

          <BenefitGroups title={"Healthcare Expense Management"}>
            <BenefitSubSector
              logoSubSector={<ThermometrSvg />}
              titleSubSector={"Critical Illness"}
            >
              <CostOverview />
            </BenefitSubSector>
            <BenefitSubSector
              logoSubSector={<HospitalBedSvg />}
              titleSubSector={"Hospital Indemnity"}
            >
              <CostOverview />
            </BenefitSubSector>
          </BenefitGroups>
        </View>
      </ScrollView>
      <ButtonEnrollment
        handleStartEnrollment={() =>
          navigation.navigate("EnrollmentNavigation")
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  scrollWrapper: {
    height: "100%",
  },
  scrollContainer: {
    marginBottom: 70,
  },
  wrapper: {
    paddingHorizontal: 20,
  },
});
