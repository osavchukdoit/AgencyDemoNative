import React from "react";
import { View, ScrollView, StyleSheet, Image } from "react-native";
import { FamilyInfoTop } from "../components/familyInfoPage/FamilyInfoTop";
import { DependantsInfoItem } from "../components/familyInfoPage/DependantsInfoItem";
import { ButtonBenefitsCart } from "../components/familyInfoPage/ButtonBenefitsCart";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DependantsInfoDetailsScreen } from "./DependantsInfoDetailsScreen";
import { useSelector } from "react-redux";
import { getServerIcon } from "../constants";
import { BlockDescScreen } from "./blocks/BlockDescScreen";
import { PageBlockItem } from "../components/blocks/PageBlockItem";

export const FamilyInfoOverviewNavigator = () => {
  const Stack = createNativeStackNavigator();
  const pageDesc = useSelector((state) => state.pageDesc.pageDesc);
  const dependentBlockDesc = pageDesc.blockLists.BlockListDesc.block.BlockDesc;
  const dependentBlockServerIcon = getServerIcon(dependentBlockDesc.blockIcon);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"FamilyInfoOverviewScreen"}
        component={FamilyInfoOverviewScreen}
        options={{ title: pageDesc.pageTitle }}
      />
      <Stack.Screen name={"BlockDescScreen"} component={BlockDescScreen} />
      <Stack.Screen
        name={"DependantsInfoDetailsScreen"}
        component={DependantsInfoDetailsScreen}
        options={() => ({
          title: dependentBlockDesc.blockTitle,
          headerRight: () => (
            <Image
              source={{ uri: dependentBlockServerIcon }}
              style={styles.blockIcon}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export const FamilyInfoOverviewScreen = ({ navigation }) => {
  const handleInfoDetails = (editScreen, params = {}) => {
    navigation.navigate(editScreen, params);
  };

  const { pageDesc } = useSelector((state) => state);
  const pageDescriptor = pageDesc.pageDesc;
  const pageBlocks = pageDescriptor.blocks;
  const blockListDesc = pageDescriptor.blockLists.BlockListDesc;

  const blockDescRender = () => {
    return pageBlocks.BlockDesc.map((blockDesc) => (
      <PageBlockItem
        key={blockDesc.blockName}
        blockDesc={blockDesc}
        handleInfoDetails={handleInfoDetails}
      />
    ));
  };

  return (
    <>
      <ScrollView stickyHeaderIndices={[0]}>
        <FamilyInfoTop />
        <View style={styles.wrapper}>
          {blockDescRender()}
          <DependantsInfoItem
            dependentsBlockDesc={blockListDesc}
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
  blockIcon: {
    width: 22,
    height: 22,
  },
});
