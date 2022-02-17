import { View, StyleSheet, ScrollView } from "react-native";
import { FamilyInfoTop } from "../components/familyInfoPage/FamilyInfoTop";
import { PersonalInfoItem } from "../components/familyInfoPage/PersonalInfoItem";
import { EmploymentInfoItem } from "../components/familyInfoPage/EmploymentInfoItem";

export const FamilyInfoOverviewScreen = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView stickyHeaderIndices={[0]}>
        <FamilyInfoTop />
        <PersonalInfoItem />
        <EmploymentInfoItem/>
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
