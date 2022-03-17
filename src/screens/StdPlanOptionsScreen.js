import { View, ScrollView, StyleSheet } from "react-native";
import { ButtonBenefitsCart } from "../components/familyInfoPage/ButtonBenefitsCart";
import { ButtonsMoreInfo } from "../components/stdPlanOptions/ButtonsMoreInfo";
import { ButtonsPlanAndMoreInfo } from "../components/stdPlanOptions/ButtonsPlanAndMoreInfo";
import { StdInfoSectorProductDescription } from "../components/stdPlanOptions/StdInfoSectorProductDescription";
import { StdPlanOptionsTop } from "../components/stdPlanOptions/StdPlanOptionsTop";
import { StdPlanSector } from "../components/stdPlanOptions/StdPlanSector";

export const StdPlanOptionsScreen = () => {
  return (
    <>
      <ScrollView>
        <StdPlanOptionsTop />
        <View style={styles.wrapper}>
          <ButtonsPlanAndMoreInfo />
          <ButtonsMoreInfo />
          <StdInfoSectorProductDescription />
          <StdPlanSector />
          <StdPlanSector />
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
