import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { FamilyInfoTop } from "../components/familyInfoPage/FamilyInfoTop";
import { PersonalInfoItem } from "../components/familyInfoPage/PersonalInfoItem";
import { EmploymentInfoItem } from "../components/familyInfoPage/EmploymentInfoItem";
import { DependantsInfoItem } from "../components/familyInfoPage/DependantsInfoItem";
import { ButtonBenefitsCart } from "../components/familyInfoPage/ButtonBenefitsCart";

export const FamilyInfoOverviewScreen = () => {
  return (
    <>
      <ScrollView stickyHeaderIndices={[0]}>
        <FamilyInfoTop />
        <View style={styles.wrapper}>
          <PersonalInfoItem />
          <EmploymentInfoItem />
          <DependantsInfoItem />
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
