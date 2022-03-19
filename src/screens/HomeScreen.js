import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { BenefitGroups } from "../components/homePage/BenefitGroups";
import { HomePageTop } from "../components/homePage/HomePageTop";
import { ButtonEnrollment } from "../components/homePage/ButtonEnrollment";

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.scrollWrapper}>
      <ScrollView stickyHeaderIndices={[0]} style={styles.scrollContainer}>
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
