import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { FamilyInfoTop } from "../components/familyInfoPage/FamilyInfoTop";
import { PersonalInfoItem } from "../components/familyInfoPage/PersonalInfoItem";
import { EmploymentInfoItem } from "../components/familyInfoPage/EmploymentInfoItem";
import { DependantsInfoItem } from "../components/familyInfoPage/DependantsInfoItem";
import { ButtonBenefitsCart } from "../components/familyInfoPage/ButtonBenefitsCart";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PersonalInfoDetailsScreen } from "./PersonalInfoDetailsScreen";
import { EmploymentInfoDetailsScreen } from "./EmploymentInfoDetailsScreen";
import { DependantsInfoDetailsScreen } from "./DependantsInfoDetailsScreen";

export const FamilyInfoOverviewNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"FamilyInfoOverviewScreen"}
        component={FamilyInfoOverviewScreen}
      />
      <Stack.Screen
        name={"PersonalInfoDetailsScreen"}
        component={PersonalInfoDetailsScreen}
      />
      <Stack.Screen
        name={"EmploymentInfoDetailsScreen"}
        component={EmploymentInfoDetailsScreen}
      />
      <Stack.Screen
        name={"DependantsInfoDetailsScreen"}
        component={DependantsInfoDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export const FamilyInfoOverviewScreen = ({ navigation }) => {
  const handleInfoDetails = (editScreen) => {
    navigation.navigate(editScreen);
  };

  return (
    <>
      <ScrollView stickyHeaderIndices={[0]}>
        <FamilyInfoTop />
        <View style={styles.wrapper}>
          <PersonalInfoItem handleInfoDetails={handleInfoDetails} />
          <EmploymentInfoItem handleInfoDetails={handleInfoDetails} />
          <DependantsInfoItem handleInfoDetails={handleInfoDetails} />
        </View>
      </ScrollView>
      <ButtonBenefitsCart />
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
  },
});
