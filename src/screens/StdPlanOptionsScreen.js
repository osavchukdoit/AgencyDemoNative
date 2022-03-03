import { View, ScrollView } from "react-native";
import { ButtonBenefitsCart } from "../components/familyInfoPage/ButtonBenefitsCart";
import { ButtonsPlanAndMoreInfo } from "../components/stdPlanOptions/ButtonsPlanAndMoreInfo";
import { StdPlanOptionsTop } from "../components/stdPlanOptions/StdPlanOptionsTop";
import { StdPlanSector } from "../components/stdPlanOptions/StdPlanSector";

export const StdPlanOptionsScreen = () => {
  return (
    <View>
      <ScrollView>
        <StdPlanOptionsTop />
        <ButtonsPlanAndMoreInfo />
        <StdPlanSector />
        <StdPlanSector />
      </ScrollView>
      <ButtonBenefitsCart/>
    </View>
  );
};
