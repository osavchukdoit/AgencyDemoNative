import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import mainStyles from "../familyInfoPage/FamilyInfoItemStyles";
import InfoCircleSvg from "../../assets/icons/familyInfoIcons/infoCircle.svg";
import ArrowRightSvg from "../../assets/icons/familyInfoIcons/vectorRight.svg";
import { useFormikContext } from "formik";
import BagIconSvg from "../../assets/icons/familyInfoIcons/bag.svg";

export const ItemInnerEmployment = ({
  isWarning,
  handleNavigateEmployment,
}) => {
  const { values } = useFormikContext();

  return (
    <>
      <View style={mainStyles.subTitleContainer}>
        <Text style={mainStyles.baseText}>
          Emploee ID:{" "}
          <Text style={mainStyles.boldText}>{values.employee.id}</Text>
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
          <Text style={mainStyles.subTitle}>{values.employee.title}</Text>
        </View>
        <TouchableOpacity onPress={handleNavigateEmployment}>
          <ArrowRightSvg />
        </TouchableOpacity>
      </View>
    </>
  );
};
