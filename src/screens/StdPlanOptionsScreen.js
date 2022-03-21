import { View, ScrollView, StyleSheet } from "react-native";
import { ButtonBenefitsCart } from "../components/familyInfoPage/ButtonBenefitsCart";
import { ButtonsMoreInfo } from "../components/stdPlanOptions/ButtonsMoreInfo";
import { ButtonsPlanAndMoreInfo } from "../components/stdPlanOptions/ButtonsPlanAndMoreInfo";
import { StdInfoSectorProductDescription } from "../components/stdPlanOptions/StdInfoSectorProductDescription";
import { StdPlanSector } from "../components/stdPlanOptions/StdPlanSector";
import { TopComponentPlanOptions } from "../components/utils/topComponents/TopComponentPlanOptions";

export const StdPlanOptionsScreen = () => {
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
