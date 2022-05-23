import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import mainStyles from "../familyInfoPage/FamilyInfoItemStyles";
import InfoCircleSvg from "../../assets/icons/familyInfoIcons/infoCircle.svg";
import CalendarIconSvg from "../../assets/icons/familyInfoIcons/calendar.svg";
import ArrowRightSvg from "../../assets/icons/familyInfoIcons/vectorRight.svg";
import { useFormikContext } from "formik";
import { fullNameOf } from "../../api/utils";

export const ItemInnerProfile = ({ isWarning, handleNavigateProfile }) => {
  const { values } = useFormikContext();
  const employeeFullName = fullNameOf(values.employee);

  return (
    <>
      <View style={mainStyles.subTitleContainer}>
        <Text style={mainStyles.subTitle}>{employeeFullName}</Text>
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
            DOB: <Text style={mainStyles.boldText}>{values.employee.dob}</Text>
          </Text>
        </View>
        <TouchableOpacity onPress={handleNavigateProfile}>
          <ArrowRightSvg />
        </TouchableOpacity>
      </View>
    </>
  );
};
