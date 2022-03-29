import { Text, View, TouchableOpacity } from "react-native";
import InfoCircleSvg from "../../assets/icons/familyInfoIcons/infoCircle.svg";
import BagIconSvg from "../../assets/icons/familyInfoIcons/bag.svg";
import ArrowRightSvg from "../../assets/icons/familyInfoIcons/vectorRight.svg";
import { useState } from "react";
import mainStyles from "./FamilyInfoItemStyles";
import { shadowStyles } from "../../styles/shadowStyles";
import { commonPlanStyles } from "../../styles/commonPlanStyles";

export const EmploymentInfoItem = () => {
  const [isWarning, setIsWarning] = useState(false);

  const onHandleWarning = () => {
    setIsWarning((prev) => {
      return !prev;
    });
  };

  return (
    <>
      <Text style={commonPlanStyles.planSectorHeader}>Employment Info</Text>
      <View style={[mainStyles.infoWrapper, shadowStyles.boxShadow]}>
        <View style={mainStyles.subTitleContainer}>
          <Text style={mainStyles.baseText}>
            Emploee ID: <Text style={mainStyles.boldText}>1234</Text>
          </Text>
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
              <BagIconSvg />
            </View>
            <Text style={mainStyles.subTitle}>Professor</Text>
          </View>
          <TouchableOpacity onPress={onHandleWarning}>
            <ArrowRightSvg />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
