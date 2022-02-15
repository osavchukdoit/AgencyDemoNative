import React from "react";
import { View } from "react-native";
import { BenefitGroups } from "../components/homePage/BenefitGroups";
import { HomePageTop } from "../components/homePage/HomePageTop";
import { ButtonEnrollment } from "../components/homePage/ButtonEnrollment";

export const HomeScreen = () => {
  return (
    <View>
      <HomePageTop />
      <BenefitGroups />
      <ButtonEnrollment />
    </View>
  );
};
