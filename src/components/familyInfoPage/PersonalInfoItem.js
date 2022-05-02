import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import InfoCircleSvg from "../../assets/icons/familyInfoIcons/infoCircle.svg";
import CalendarIconSvg from "../../assets/icons/familyInfoIcons/calendar.svg";
import ArrowRightSvg from "../../assets/icons/familyInfoIcons/vectorRight.svg";
import mainStyles from "./FamilyInfoItemStyles";
import { commonPlanStyles } from "../../styles/commonPlanStyles";
import { BasicSectorWrapper } from "../utils/BasicSectorWrapper";

export const PersonalInfoItem = ({ profileBlockDesc, handleInfoDetails }) => {
  const { blockTitle } = profileBlockDesc;

  const [isWarning, setIsWarning] = useState(true);

  const handlePersonalInfo = () =>
    handleInfoDetails("PersonalInfoDetailsScreen");

  return (
    <>
      <Text style={commonPlanStyles.planSectorHeader}>{blockTitle}</Text>

      <BasicSectorWrapper>
        <View style={mainStyles.subTitleContainer}>
          <Text style={mainStyles.subTitle}>John Doe</Text>
          {isWarning && (
            <View style={mainStyles.warningTextContainer}>
              <InfoCircleSvg />
              <Text style={mainStyles.warningSubTitle}>Missing items</Text>
            </View>
          )}
        </View>
        <View style={mainStyles.subInfoWrapper}>
          <View style={mainStyles.subTextAndIconsContainer}>
            <View style={mainStyles.iconSvgWrapper}>
              <CalendarIconSvg />
            </View>
            <Text style={mainStyles.baseText}>
              DOB: <Text style={mainStyles.boldText}>09/09/1990</Text>
            </Text>
          </View>
          <TouchableOpacity onPress={handlePersonalInfo}>
            <ArrowRightSvg />
          </TouchableOpacity>
        </View>
      </BasicSectorWrapper>
    </>
  );
};
