import { View, ScrollView, StyleSheet } from "react-native";
import { MainEmploymentInfo } from "../components/employmentInfoPage/MainEmploymentInfo";
import { TopPersonalInfo } from "../components/personalInfoPage/TopPersonalInfo";

export const EmploymentInfoDetailsScreen = () => {
  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <TopPersonalInfo />
      <View style={styles.wrapper}>
        <MainEmploymentInfo />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },
});
