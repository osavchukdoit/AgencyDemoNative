import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { MainPersonalInfo } from "../components/personalInfoPage/MainPersonalInfo";
import { TopPersonalInfo } from "../components/personalInfoPage/TopPersonalInfo";

export const PersonalInfoDetailsScreen = () => {
  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <TopPersonalInfo />
      <View style={styles.wrapper}>
        <MainPersonalInfo />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },
});
