import { Text, View, TouchableOpacity } from "react-native";
import InfoCircleSvg from "../../assets/icons/familyInfoIcons/infoCircle.svg";
import CalendarIconSvg from "../../assets/icons/familyInfoIcons/calendar.svg";
import ArrowRightSvg from "../../assets/icons/familyInfoIcons/vectorRight.svg";
import { useState } from "react";
import mainStyles from "./FamilyInfoItemStyles";
import { shadowStyles } from "../../styles/shadowStyles";
import { commonPlanStyles } from "../../styles/commonPlanStyles";

export const PersonalInfoItem = ({ handleInfoDetails }) => {
  const [isWarning, setIsWarning] = useState(true);

  const handleWarning = () => {
    setIsWarning((prev) => !prev);
  };

  const handlePersonalInfo = () =>
    handleInfoDetails("PersonalInfoDetailsScreen");

  return (
    <>
      <Text style={commonPlanStyles.planSectorHeader}>Personal Info</Text>
      <View style={[mainStyles.infoWrapper, shadowStyles.boxShadow]}>
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
      </View>
    </>
  );
};
