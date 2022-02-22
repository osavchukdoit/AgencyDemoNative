import { View, ScrollView } from "react-native";
import { MainPersonalInfo } from "../components/personalInfoPage/MainPersonalInfo";
import { TopPersonalInfo } from "../components/personalInfoPage/TopPersonalInfo";

export const PersonalInfoDetailsScreen = () => {
  return (
    <View>
      <ScrollView stickyHeaderIndices={[0]}>
        <TopPersonalInfo />
        <MainPersonalInfo />
      </ScrollView>
    </View>
  );
};
