import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { BenefitGroups } from "../components/homePage/BenefitGroups";
import { HomePageTop } from "../components/homePage/HomePageTop";
import { ButtonEnrollment } from "../components/homePage/ButtonEnrollment";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
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

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    position: "relative",
  },
});
