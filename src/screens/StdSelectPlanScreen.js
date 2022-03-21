import { View, ScrollView, StyleSheet } from "react-native";
import { ButtonBenefitsCart } from "../components/familyInfoPage/ButtonBenefitsCart";
import { StdPlanSector } from "../components/stdPlanOptions/StdPlanSector";
import { ConfirmReadSelectedPlan } from "../components/stdSelectPlan/ConfirmReadSelectedPlan";
import { TitleOfSelectedPlan } from "../components/stdSelectPlan/TitleOfSelectedPlan";
import { TopComponentPlanOptions } from "../components/utils/topComponents/TopComponentPlanOptions";

export const StdSelectPlanScreen = () => {
  return (
    <>
      <ScrollView>
        <TopComponentPlanOptions
          imgMain={require("../assets/topComponent/stdPlanOptionTopPic.png")}
          textnormal={"Income Protection for the Unexpected!"}
          textBold={"Select Short Term Disability Plan"}
          imgSecondary={require("../assets/topComponent/stdGlobePic.png")}
          textDown={
            "Short term disability insurance can pay you a weekly benefit if you have a covered disability that keeps you from working."
          }
        />
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
