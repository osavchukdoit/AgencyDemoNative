import { View, ScrollView, StyleSheet } from "react-native";
import { ButtonBenefitsCart } from "../components/familyInfoPage/ButtonBenefitsCart";
import { StdPlanOptionsTop } from "../components/stdPlanOptions/StdPlanOptionsTop";
import { StdPlanSector } from "../components/stdPlanOptions/StdPlanSector";
import { ConfirmReadSelectedPlan } from "../components/stdSelectPlan/ConfirmReadSelectedPlan";
import { TitleOfSelectedPlan } from "../components/stdSelectPlan/TitleOfSelectedPlan";

export const StdSelectPlanScreen = () => {
  return (
    <>
      <ScrollView>
        <StdPlanOptionsTop />
        <View style={styles.wrapper}>
          <TitleOfSelectedPlan />
          <StdPlanSector isRadioButton={true} />
          <StdPlanSector />
          <ConfirmReadSelectedPlan />
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
