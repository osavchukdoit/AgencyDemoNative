import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { TopPersonalInfo } from "../components/personalInfoPage/TopPersonalInfo";
import { MainDependantsInfo } from "../components/dependantsInfoPage/MainDependantsInfo";

export const DependantsInfoDetailsScreen = () => {
  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <TopPersonalInfo />
      <View style={styles.wrapper}>
        <MainDependantsInfo />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },
});
