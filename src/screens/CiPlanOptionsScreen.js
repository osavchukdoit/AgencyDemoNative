import { View, ScrollView } from "react-native";
import { CiPlanOptionsTop } from "../components/ciPlanOptionsPage/CiPlanOptionsTop";
import { ButtonsPlanAndMoreInfo } from "../components/stdPlanOptions/ButtonsPlanAndMoreInfo";
import { CiPlanSector } from "../components/ciPlanOptionsPage/CiPlanSector";
import { ButtonsMoreInfo } from "../components/stdPlanOptions/ButtonsMoreInfo";
import { CiInfoProductDescription } from "../components/ciPlanOptionsPage/CiInfoProductDescription";
import { ButtonBenefitsCart } from "../components/familyInfoPage/ButtonBenefitsCart";
export const CiPlanOptionsScreen = () => {
  return (
    <View>
      <ScrollView>
        <CiPlanOptionsTop />
        <ButtonsPlanAndMoreInfo />
        <ButtonsMoreInfo />
        <CiInfoProductDescription />
        <CiPlanSector />
        <CiPlanSector />
      </ScrollView>
      <ButtonBenefitsCart />
    </View>
  );
};
