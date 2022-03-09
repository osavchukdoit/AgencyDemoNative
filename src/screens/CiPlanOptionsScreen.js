import { View, ScrollView } from "react-native";
import { CiPlanOptionsTop } from "../components/ciPlanOptionsPage/CiPlanOptionsTop";
import { ButtonsPlanAndMoreInfo } from "../components/stdPlanOptions/ButtonsPlanAndMoreInfo";
import { CiPlanSector } from "../components/ciPlanOptionsPage/CiPlanSector";

export const CiPlanOptionsScreen = () => {
  return (
    <View>
      <ScrollView>
        <CiPlanOptionsTop />
        <ButtonsPlanAndMoreInfo />
        <CiPlanSector />
        <CiPlanSector />
      </ScrollView>
    </View>
  );
};
