import { View, ScrollView, Text } from "react-native";
import { MainEmploymentInfo } from "../components/employmentInfoPage/MainEmploymentInfo";
import { TopPersonalInfo } from "../components/personalInfoPage/TopPersonalInfo";

export const EmploymentInfoDetailsScreen = () => {
  return (
    <View>
      <ScrollView stickyHeaderIndices={[0]}>
        <TopPersonalInfo />
        <MainEmploymentInfo />
      </ScrollView>
    </View>
  );
};
