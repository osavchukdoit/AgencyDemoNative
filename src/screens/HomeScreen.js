import React from "react";
import { ScrollView, View } from "react-native";
import { BenefitGroups } from "../components/homePage/BenefitGroups";
import { HomePageTop } from "../components/homePage/HomePageTop";
import { ButtonEnrollment } from "../components/homePage/ButtonEnrollment";

export const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <ScrollView stickyHeaderIndices={[0]}>
        <HomePageTop />
        <View>
          <BenefitGroups />
          <BenefitGroups />
          <BenefitGroups />
          <BenefitGroups />
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
