import { View, ScrollView, Text } from "react-native";
import { TopPersonalInfo } from "../components/personalInfoPage/TopPersonalInfo";
import { MainDependantsInfo } from "../components/dependantsInfoPage/MainDependantsInfo";

export const DependantsInfoDetailsScreen = () => {
  return (
    <View>
      <ScrollView stickyHeaderIndices={[0]}>
        <TopPersonalInfo />
        <MainDependantsInfo />
      </ScrollView>
    </View>
  );
};
