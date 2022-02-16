import React from "react";
import { ScrollView } from "react-native";
import { BenefitGroups } from "../components/homePage/BenefitGroups";
import { HomePageTop } from "../components/homePage/HomePageTop";
import { ButtonEnrollment } from "../components/homePage/ButtonEnrollment";

export const HomeScreen = () => {
  return (
    <ScrollView>
      <HomePageTop />
      <BenefitGroups />
      <ButtonEnrollment />
    </ScrollView>
  );
};
