import { View, ScrollView, StyleSheet, Text } from "react-native";
import { MainPersonalInfo } from "../components/personalInfoPage/MainPersonalInfo";
import { TopPersonalInfo } from "../components/personalInfoPage/TopPersonalInfo";

export const PersonalInfoDetailsScreen = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView stickyHeaderIndices={[0]}>
        <TopPersonalInfo />
        <MainPersonalInfo />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    position: "relative",
  },
});
