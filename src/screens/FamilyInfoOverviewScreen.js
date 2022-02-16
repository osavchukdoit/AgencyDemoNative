import { View, StyleSheet, ScrollView } from "react-native";
import { FamilyInfoTop } from "../components/FamilyInfoPage/FamilyInfoTop";
import { FamilyInfoItem } from "../components/FamilyInfoPage/FamilyInfoItem";

export const FamilyInfoOverviewScreen = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView stickyHeaderIndices={[0]}>
        <FamilyInfoTop />
        <FamilyInfoItem />
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
