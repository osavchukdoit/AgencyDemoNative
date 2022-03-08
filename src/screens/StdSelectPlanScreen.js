import { View, ScrollView } from "react-native";
import { ButtonBenefitsCart } from "../components/familyInfoPage/ButtonBenefitsCart";
import { StdPlanOptionsTop } from "../components/stdPlanOptions/StdPlanOptionsTop";
import { StdPlanSector } from "../components/stdPlanOptions/StdPlanSector";
import { ConfirmReadSelectedPlan } from "../components/stdSelectPlan/ConfirmReadSelectedPlan";
import { TitleOfSelectedPlan } from "../components/stdSelectPlan/TitleOfSelectedPlan";

export const StdSelectPlanScreen = () => {
  return (
    <View>
      <ScrollView>
        <StdPlanOptionsTop />
        <TitleOfSelectedPlan />
        <StdPlanSector isRadioButton={true} />
        <StdPlanSector />
        <ConfirmReadSelectedPlan />
      </ScrollView>
      <ButtonBenefitsCart />
    </View>
  );
};
