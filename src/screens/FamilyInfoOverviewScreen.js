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
import { useSelector } from "react-redux";

export const FamilyInfoOverviewNavigator = () => {
  const Stack = createNativeStackNavigator();
  const pageDesc = useSelector((state) => state.pageDesc.pageDesc);
  const blockDesk = pageDesc.blocks.BlockDesc;
  const profileBlockDesc = blockDesk.find(
    ({ blockName }) => blockName === "Profile"
  );
  const employmentBlockDesc = blockDesk.find(
    ({ blockName }) => blockName === "Employment"
  );
  const dependentBlockDesc = pageDesc.blockLists.BlockListDesc.block.BlockDesc;

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"FamilyInfoOverviewScreen"}
        component={FamilyInfoOverviewScreen}
        options={{ title: pageDesc.pageTitle }}
      />
      <Stack.Screen
        name={"PersonalInfoDetailsScreen"}
        component={PersonalInfoDetailsScreen}
        options={{ title: profileBlockDesc.blockTitle }}
      />
      <Stack.Screen
        name={"EmploymentInfoDetailsScreen"}
        component={EmploymentInfoDetailsScreen}
        options={{ title: employmentBlockDesc.blockTitle }}
      />
      <Stack.Screen
        name={"DependantsInfoDetailsScreen"}
        component={DependantsInfoDetailsScreen}
        options={{ title: dependentBlockDesc.blockTitle }}
      />
    </Stack.Navigator>
  );
};

export const FamilyInfoOverviewScreen = ({ navigation }) => {
  const handleInfoDetails = (editScreen) => {
    navigation.navigate(editScreen);
  };

  const { pageDesc } = useSelector((state) => state);
  const pageDescriptor = pageDesc.pageDesc;
  const pageBlocks = pageDescriptor.blocks;
  const employerBlocks = pageBlocks.BlockDesc;

  const profileBlockDesc = employerBlocks.find(
    ({ blockName }) => blockName === "Profile"
  );
  const employmentBlockDesc = employerBlocks.find(
    ({ blockName }) => blockName === "Employment"
  );
  const dependentsBlockDesc = pageDescriptor.blockLists.BlockListDesc;

  return (
    <>
      <ScrollView stickyHeaderIndices={[0]}>
        <FamilyInfoTop />
        <View style={styles.wrapper}>
          <PersonalInfoItem
            profileBlockDesc={profileBlockDesc}
            handleInfoDetails={handleInfoDetails}
          />
          <EmploymentInfoItem
            employmentBlockDesc={employmentBlockDesc}
            handleInfoDetails={handleInfoDetails}
          />
          <DependantsInfoItem
            dependentsBlockDesc={dependentsBlockDesc}
            handleInfoDetails={handleInfoDetails}
          />
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
