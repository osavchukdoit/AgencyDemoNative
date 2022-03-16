import { View, ScrollView, StyleSheet } from "react-native";
import { CiPlanOptionsTop } from "../components/ciPlanOptionsPage/CiPlanOptionsTop";
import { ButtonsPlanAndMoreInfo } from "../components/stdPlanOptions/ButtonsPlanAndMoreInfo";
import { CiPlanSector } from "../components/ciPlanOptionsPage/CiPlanSector";
import { ButtonsMoreInfo } from "../components/stdPlanOptions/ButtonsMoreInfo";
import { CiInfoProductDescription } from "../components/ciPlanOptionsPage/CiInfoProductDescription";
import { ButtonBenefitsCart } from "../components/familyInfoPage/ButtonBenefitsCart";

export const CiPlanOptionsScreen = () => {
  return (
    <>
      <ScrollView>
        <CiPlanOptionsTop />
        <View style={styles.wrapper}>
          <ButtonsPlanAndMoreInfo />
          <ButtonsMoreInfo />
          <CiInfoProductDescription />
          <CiPlanSector />
          <CiPlanSector />
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
