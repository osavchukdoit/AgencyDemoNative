import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { TopPersonalInfo } from "../components/personalInfoPage/TopPersonalInfo";
import { MainDependantsInfo } from "../components/dependantsInfoPage/MainDependantsInfo";

export const DependantsInfoDetailsScreen = ({ route }) => {
  const { blockDesc } = route.params;
  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <TopPersonalInfo />
      <View style={styles.wrapper}>
        <MainDependantsInfo params={route.params} {...blockDesc} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },
});
