import { View, ScrollView, StyleSheet } from "react-native";
import { ButtonsPlanAndMoreInfo } from "../components/utils/ButtonsPlanAndMoreInfo";
import { TermPlanSector } from "../components/termLifePlanOptionsPage/TermPlanSector";
import { TermPlanBiWeekly } from "../components/termLifePlanOptionsPage/TermPlanBiWeekly";
import { ButtonBenefitsCart } from "../components/familyInfoPage/ButtonBenefitsCart";
import { TopComponentPlanOptions } from "../components/utils/topComponents/TopComponentPlanOptions";

export const TermLifePlanOptionsScreen = () => {
  return (
    <>
      <ScrollView>
        <TopComponentPlanOptions
          imgMain={require("../assets/topComponent/termLifePlanOptionsTopPage.png")}
          textnormal={"Financial Protection for the Unexpected!"}
          textBold={"Select Term Life Plans"}
          imgSecondary={require("../assets/topComponent/stdGlobePic.png")}
          textDown={
            "Term Life insurance peovides cash benefits to help your family pay or expances such as funeral expances, incom replacement, mortgage."
          }
        />
        <View style={styles.wrapper}>
          <ButtonsPlanAndMoreInfo />
          <TermPlanSector />
          <TermPlanBiWeekly />
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
