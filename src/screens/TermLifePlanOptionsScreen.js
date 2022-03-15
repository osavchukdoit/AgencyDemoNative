import { View, ScrollView } from "react-native";
import { TermLifePlanOptionsTop } from "../components/termLifePlanOptionsPage/TermLifePlanOptionsTop";
import { ButtonsPlanAndMoreInfo } from "../components/stdPlanOptions/ButtonsPlanAndMoreInfo";
import { TermPlanSector } from "../components/termLifePlanOptionsPage/TermPlanSector";
import { TermPlanBiWeekly } from "../components/termLifePlanOptionsPage/TermPlanBiWeekly";
import { ButtonBenefitsCart } from "../components/familyInfoPage/ButtonBenefitsCart";

export const TermLifePlanOptionsScreen = () => {
  return (
    <View>
      <ScrollView>
        <TermLifePlanOptionsTop />
        <View style={{ paddingHorizontal: 20 }}>
          <ButtonsPlanAndMoreInfo />
          <TermPlanSector />
          <TermPlanBiWeekly />
        </View>
      </ScrollView>
      <ButtonBenefitsCart />
    </View>
  );
};
