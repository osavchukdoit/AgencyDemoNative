import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import InfoCircleSvg from "../../assets/icons/familyInfoIcons/infoCircle.svg";
import BagIconSvg from "../../assets/icons/familyInfoIcons/bag.svg";
import ArrowRightSvg from "../../assets/icons/familyInfoIcons/vectorRight.svg";
import mainStyles from "./FamilyInfoItemStyles";
import { commonPlanStyles } from "../../styles/commonPlanStyles";
import { BasicSectorWrapper } from "../utils/BasicSectorWrapper";
import { useFormikContext } from "formik";

export const EmploymentInfoItem = ({
  employmentBlockDesc,
  handleInfoDetails,
}) => {
  const [isWarning, setIsWarning] = useState(false);
  const { blockTitle } = employmentBlockDesc;
  const { values } = useFormikContext();

  return (
    <>
      <Text style={commonPlanStyles.planSectorHeader}>{blockTitle}</Text>

      <BasicSectorWrapper>
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
