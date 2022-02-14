import React from "react";
import { View } from "react-native";
import { BenefitGroups } from "../components/homePage/BenefitGroups";
import { HomePageTop } from "../components/homePage/HomePageTop";

export const HomeScreen = () => {
  return (
    <View>
      <HomePageTop />
      <BenefitGroups/>
    </View>
  );
};
