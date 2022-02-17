import { Text, View, TouchableOpacity } from "react-native";
import InfoCircleSvg from "../../assets/icons/familyInfoIcons/infoCircle.svg";
import CalendarIconSvg from "../../assets/icons/familyInfoIcons/calendar.svg";
import ArrowRoghtSvg from "../../assets/icons/familyInfoIcons/vectorRight.svg";
import { useState } from "react";
import mainStyles from "./stylesFamilyInfoItem";

export const PersonalInfoItem = () => {
  const [isWarning, setIsWarning] = useState(true);

  const onHandleWarning = () => {
    setIsWarning((prev) => {
      return !prev;
    });
  };

  return (
    <View style={mainStyles.wrapper}>
      <Text style={mainStyles.infoTitle}>Personal Info</Text>
      <View style={mainStyles.infoWrapper}>
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
          <TouchableOpacity
            onPress={onHandleWarning}
            style={mainStyles.arrowButtom}
          >
            <ArrowRoghtSvg />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
