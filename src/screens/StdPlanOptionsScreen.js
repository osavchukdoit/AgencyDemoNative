import { View, ScrollView, StyleSheet } from "react-native";
import { ButtonBenefitsCart } from "../components/familyInfoPage/ButtonBenefitsCart";
import { ButtonsMoreInfo } from "../components/utils/ButtonsMoreInfo";
import { ButtonsPlanAndMoreInfo } from "../components/utils/ButtonsPlanAndMoreInfo";
import { StdInfoSectorProductDescription } from "../components/stdPlanOptions/StdInfoSectorProductDescription";
import { StdPlanSector } from "../components/stdPlanOptions/StdPlanSector";
import { TopComponentPlanOptions } from "../components/utils/topComponents/TopComponentPlanOptions";
import { useState } from "react";

export const StdPlanOptionsScreen = () => {
  const [isPlanOptions, setIsPlanOptions] = useState(true);

  const showPlanOptions = () => {
    return setIsPlanOptions(true);
  };

  const showMoreInfo = () => {
    return setIsPlanOptions(false);
  };

  return (
    <>
      <ScrollView>
        <TopComponentPlanOptions
          imgMain={require("../assets/topComponent/stdPlanOptionTopPic.png")}
          textNormal={"Income Protection for the Unexpected!"}
          textBold={"Select Short Term Disability Plan"}
          imgSecondary={require("../assets/topComponent/stdGlobePic.png")}
          textDown={
            "Short term disability insurance can pay you a weekly benefit if you have a covered disability that keeps you from working."
          }
        />
        <View style={styles.wrapper}>
          <ButtonsPlanAndMoreInfo
            handlePressOptions={showPlanOptions}
            handlePressInfo={showMoreInfo}
            isPlanOptionActive={isPlanOptions}
          />
          {isPlanOptions ? (
            <>
              <StdPlanSector />
              <StdPlanSector />
            </>
          ) : (
            <>
              <ButtonsMoreInfo />
              <StdInfoSectorProductDescription />
            </>
          )}
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
