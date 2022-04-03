import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { ButtonsPlanAndMoreInfo } from "../components/utils/ButtonsPlanAndMoreInfo";
import { CiPlanSector } from "../components/ciPlanOptionsPage/CiPlanSector";
import { ButtonsMoreInfo } from "../components/utils/ButtonsMoreInfo";
import { CiInfoProductDescription } from "../components/ciPlanOptionsPage/CiInfoProductDescription";
import { ButtonBenefitsCart } from "../components/familyInfoPage/ButtonBenefitsCart";
import { TopComponentPlanOptions } from "../components/utils/topComponents/TopComponentPlanOptions";
import { useState } from "react";

export const CiPlanOptionsScreen = () => {
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
          imgMain={require("../assets/topComponent/ciPlanOptionTopPic.png")}
          textNormal={"Quality of Life Protection for the Unexpected!"}
          textBold={"Select Critical Illness Plans"}
          imgSecondary={require("../assets/topComponent/stdGlobePic.png")}
          textDown={
            "Critical illness insurance can help you protect your finances if you are diagnosed with a covered serious condition. The plan pays benefits to you."
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
              <CiPlanSector header={"Critical Illness $10,000"} />
              <CiPlanSector header={"Critical Illness $20,000"} />
            </>
          ) : (
            <>
              <ButtonsMoreInfo />
              <CiInfoProductDescription />
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
