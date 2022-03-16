import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { BenefitGroups } from "../components/homePage/BenefitGroups";
import { HomePageTop } from "../components/homePage/HomePageTop";
import { ButtonEnrollment } from "../components/homePage/ButtonEnrollment";

export const HomeScreen = ({ navigation }) => {
  return (
    <>
      <ScrollView stickyHeaderIndices={[0]}>
        <HomePageTop />
        <View style={styles.wrapper}>
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
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },
});
