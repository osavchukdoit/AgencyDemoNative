import { View, StyleSheet, ScrollView } from "react-native";
import { FamilyInfoTop } from "../components/familyInfoPage/FamilyInfoTop";
import { PersonalInfoItem } from "../components/familyInfoPage/PersonalInfoItem";
import { EmploymentInfoItem } from "../components/familyInfoPage/EmploymentInfoItem";
import { DependantsInfoItem } from "../components/familyInfoPage/DependantsInfoItem";
import { ButtonBenefitsCart } from "../components/familyInfoPage/ButtonBenefitsCart";

export const FamilyInfoOverviewScreen = () => {
  return (
    <View style={styles.wrapper}>
      <ScrollView stickyHeaderIndices={[0]}>
        <FamilyInfoTop />
        <PersonalInfoItem />
        <EmploymentInfoItem />
        <DependantsInfoItem />
      </ScrollView>
      <ButtonBenefitsCart/>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    position: "relative",
  },
});