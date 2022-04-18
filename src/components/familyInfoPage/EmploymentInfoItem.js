import { Text, View, TouchableOpacity } from "react-native";
import InfoCircleSvg from "../../assets/icons/familyInfoIcons/infoCircle.svg";
import BagIconSvg from "../../assets/icons/familyInfoIcons/bag.svg";
import ArrowRightSvg from "../../assets/icons/familyInfoIcons/vectorRight.svg";
import { useState } from "react";
import mainStyles from "./FamilyInfoItemStyles";
import { commonPlanStyles } from "../../styles/commonPlanStyles";
import { BasicSectorWrapper } from "../utils/BasicSectorWrapper";

export const EmploymentInfoItem = ({ handleInfoDetails }) => {
  const [isWarning, setIsWarning] = useState(false);

  const handleWarning = () => {
    setIsWarning((prev) => {
      return !prev;
    });
  };

  return (
    <>
      <Text style={commonPlanStyles.planSectorHeader}>Employment Info</Text>

      <BasicSectorWrapper>
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
          <TouchableOpacity
            onPress={() => {
              handleInfoDetails("EmploymentInfoDetailsScreen");
            }}
          >
            <ArrowRightSvg />
          </TouchableOpacity>
        </View>
      </BasicSectorWrapper>
    </>
  );
};
